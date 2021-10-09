import { ReactElement, useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import { axiosInstance } from "./FetchApi";
import { Error404 } from "pages/Error";
import { AllCentered } from "components/util/Positioning";
import { LoadingAnimation } from "components/util/Loading";
import { Spacer } from "components/util/Spacer";

import { useAuth } from "./AuthenticationContext";
import { prefixApi } from "util/Proxy";

type ErrorType = {
  message?: string;
};

const AuthRoute = (props: { path: string; children: ReactElement }) => {
  const { isLoggedIn, loading, refreshAccess } = useAuth();

  useEffect(() => {
    //Once mounted, try to get access token
    refreshAccess();
  });

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Route path={props.path}>
        {isLoggedIn ? props.children : <Redirect to="/login" />}{" "}
      </Route>
    );
  }
};

const Loading = () => (
  <AllCentered>
    <LoadingAnimation />
  </AllCentered>
);

const Error = ({ message }: ErrorType) => (
  <AllCentered>
    <div>
      <Error404 />
      <Spacer />
      {message}
    </div>
  </AllCentered>
);

type DataSupplierProps<T> = {
  url: string;
  onLoading?: () => ReactElement;
  onError?: (error: ErrorType) => ReactElement;
  render: (json: T) => ReactElement;
};

const DataSupplier = <T,>({
  url,
  onLoading,
  onError,
  render,
}: DataSupplierProps<T>) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType | undefined>(undefined);
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    axiosInstance.get<T>(prefixApi(url), { withCredentials: true }).then(
      (result) => {
        setData(result.data);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, [url]);

  if (loading) {
    return onLoading ? onLoading() : <Loading />;
  }

  if (error?.message !== undefined) {
    return onError ? onError(error) : <Error message={error.message} />;
  }

  return render(data as T);
};

const useDataConsumer = (
  url: string,
  method: "post" | "put" | "patch" = "post"
) => {
  const [loading, setLoading] = useState(false);

  const axiosMethod = {
    post: axiosInstance.post,
    put: axiosInstance.put,
    patch: axiosInstance.patch,
  }[method];

  const submitData = (data: any, withCredentials: boolean = true) => {
    setLoading(true);
    const request = axiosMethod(url, data, { withCredentials });
    request.catch(() => {}).finally(() => setLoading(false));
    return request;
  };

  return { loading, submitData };
};

export { AuthRoute, DataSupplier, useDataConsumer };
export type { ErrorType };

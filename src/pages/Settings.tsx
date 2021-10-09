import { useAuth } from "api/AuthenticationContext";
import { Button } from "components/Buttons";
import { ChangePasswordForm } from "components/form/ChangePasswordForm";
import { Spacer } from "components/util/Spacer";

const Settings = () => {
  const { logout } = useAuth();

  return (
    <div className="container">
      <Spacer />
      <h1>Settings</h1>
      <Spacer />
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <ChangePasswordForm />
          <Spacer />
          <Button label={"Logout"} onClick={() => logout()} />
        </div>
      </div>
    </div>
  );
};

export { Settings };

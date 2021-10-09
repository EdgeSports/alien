import { useEffect, useState } from "react";
import { prefixLorem } from "util/Proxy";
import "./lorem.css";

enum ParagraphLengthEnum {
  short = "short",
  medium = "medium",
  long = "long",
  verylong = "verylong",
}

type LoremType = {
  paragraphs?: number;
  paragraph_length?: ParagraphLengthEnum;
  has_decorations?: boolean;
  has_links?: boolean;
  has_unordered_lists?: boolean;
  has_numbered_lists?: boolean;
  has_description_lists?: boolean;
  has_blockquotes?: boolean;
  has_code?: boolean;
  has_headers?: boolean;
  is_all_caps?: boolean;
  is_plaintext?: boolean;
};

type ErrorType = {
  message?: string;
};

function Lorem({
  paragraphs = 1,
  paragraph_length = ParagraphLengthEnum.medium,
  has_decorations = false,
  has_links = false,
  has_unordered_lists = false,
  has_numbered_lists = false,
  has_description_lists = false,
  has_blockquotes = false,
  has_code = false,
  has_headers = false,
  is_all_caps = false,
  is_plaintext = false,
}: LoremType) {
  const [error, setError] = useState<ErrorType>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [lorem, setLorem] = useState("");

  const api_url = prefixLorem(
    "/" +
      paragraphs +
      ("/" + paragraph_length) +
      (has_decorations ? "/decorate" : "") +
      (has_links ? "/link" : "") +
      (has_unordered_lists ? "/ul" : "") +
      (has_numbered_lists ? "/ol" : "") +
      (has_description_lists ? "/dl" : "") +
      (has_blockquotes ? "/bq" : "") +
      (has_code ? "/code" : "") +
      (has_headers ? "/headers" : "") +
      (is_all_caps ? "/allcaps" : "") +
      (is_plaintext ? "/plaintext" : "")
  );

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(api_url, { method: "GET" })
      .then((res) => {
        return res.text();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setLorem(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [api_url]);

  if (error.message !== undefined) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="lorem" dangerouslySetInnerHTML={{ __html: lorem }}></div>
    );
  }
}

export { Lorem, ParagraphLengthEnum };

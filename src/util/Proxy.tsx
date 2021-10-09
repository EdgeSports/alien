import { Environment, ENVIRONMENT } from "./Environment";

const prefixApi = (endpoint: string) => {
  switch (ENVIRONMENT) {
    case Environment.DEVELOPMENT:
      return endpoint;
    case Environment.TEST:
      return endpoint;
    case Environment.PRODUCTION:
      return endpoint;
    default:
      // Shouldn't happen
      return endpoint;
  }
};

const prefixLorem = (endpoint: string) => {
  switch (ENVIRONMENT) {
    case Environment.DEVELOPMENT:
      return "/lorem" + endpoint;
    case Environment.TEST:
      return "https://loripsum.net/api" + endpoint;
    case Environment.PRODUCTION:
      return "https://loripsum.net/api" + endpoint;
    default:
      // Shouldn't happen
      return "/lorem" + endpoint;
  }
};

export { prefixApi, prefixLorem };

export enum Environment {
  PRODUCTION,
  TEST,
  DEVELOPMENT,
}

/* Some logic that determines what Environment we're in */
const getEnvironment = () => Environment.PRODUCTION;

/* For Project Alien, just say that the environment is always development */
export const ENVIRONMENT = getEnvironment();

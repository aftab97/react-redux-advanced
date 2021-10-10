import env from "./env";

//change accordingly
const baseURLs = {
  production: "https://candykabin.co.uk/api",
  development: "https://candykabin.co.uk/api",
};

const config = {
  baseURL: baseURLs[env === "production" ? "production" : "development"],

  //add Headers
  //X-api-key
  //x-auth-token
  //token
  //etc
};

export default config;

let env = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  env = "development";
} else {
  // production code
  env = "production";
}

export default env;

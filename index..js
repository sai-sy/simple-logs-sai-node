// simple-node-logs.js
import "dotenv/config";

function log(log) {
  console.log(log);
}

const dev = {
  checkEnv() {
    if (process.env.ENVIRONMENT === "PRODUCTION") {
      return false;
    }
    return (
      !process.env.ENVIRONMENT ||
      process.env.ENVIRONMENT === "DEVELOPMENT" ||
      process.env.ENVIRONMENT === "DEV"
    );
  },
  log(output) {
    if (dev.checkEnv()) {
      console.log(output);
    }
  },
  error(output) {
    if (dev.checkEnv()) {
      console.error(output);
    }
  },
  info(output) {
    if (dev.checkEnv()) {
      console.info(output);
    }
  },
  warn(output) {
    if (dev.checkEnv()) {
      console.warn(output);
    }
  },
  debug(output) {
    if (dev.checkEnv()) {
      console.debug(output);
    }
  },
};

export { dev, log };

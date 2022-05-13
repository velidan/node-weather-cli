#!/user/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

async function saveToken(token) {
  if (!token.length) {
    printError('Token must be passed');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token saved');
  } catch (e) {
    printError(e.message);
  }

}

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    // print help
    printHelp();
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    // save token
    return saveToken(args.t);
  }
  // print weather

  getWeather('kyiv');
};

initCLI();
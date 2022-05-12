#!/user/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

async function saveToken(token) {
  try {
    await saveKeyValue('token', token);
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
};

initCLI();
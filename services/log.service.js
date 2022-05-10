import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = err => {
  console.log(chalk.bgRed('Error ') + err);
};
const printSuccess = msg => {
  console.log(chalk.bgGreen('Success ') + msg);
};

const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan('HELP')}
      No params    - weather render.
      -s [CITY]    - set the city
      -h           - render help
      -t [API_KEY] - set the API KEY for openweather service
  `));
}

export { printError, printSuccess, printHelp };

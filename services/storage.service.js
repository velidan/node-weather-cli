import { join } from 'path';
import process from 'node:process';
import { promises } from 'fs';

const TOKEN_DICTIONARY = {
  token: 'token',
  city: 'city'
};

const filePath = join(process.cwd(), 'weather-data.json');

const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }

  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

async function isExist(path) {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }

}

async function getKeyValue(key) {
  if (await isExist(filePath)) {

    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }

  return undefined;
}

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY }

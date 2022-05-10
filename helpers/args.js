const getArgs = args => {
  const res = {};
  console.log('process.argv', args);
  const [executer, file, ...rest] = args;
  console.log('res -> ', rest);

  rest.forEach((value, index, array) => {
    if (value.charAt(0) == '-') {
      if (index == array.length - 1) {
        res[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) !== '-') {
        console.log('value -> ', value);
        res[value.substring(1)] = array[index + 1];
      } else {
        res[value.substring(1)] = true;
      }
    }
  });
  return res;
}

export {
  getArgs
}

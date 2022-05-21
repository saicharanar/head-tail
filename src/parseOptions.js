/*
// const multiOptions = (content) => {
//   return content.includes('-n') && content.includes('-c');
// };


// const checkValidators = (allOptions) => {
  //   try {
    //     if (multiOptions(allOptions)) {
      //       throw 'Invalid options';
      //     }
      //     if (allOptions.includes('--help')) {
        //       throw 'usage';
        //     }
        //   } catch (error) {
          //     throw { error: error };
          //   }
          // };
          */

const noOptionGiven = (content) => !content.some((option) => {
  return /^-[nc]/.test(option);
});

const isOption = (element) => /^-[nc]/.test(element);

const keyContainsValue = (key) => /[0-9]+/.test(key);

const getValue = (key, value) => {
  let keyValue = value;
  let newKey = key;
  if (keyContainsValue(key)) {
    [, newKey, keyValue] = key.match(/(-[nc])([0-9]+)/);
  }

  return [newKey, keyValue];
};

const getFiles = (startIndex, content) => {
  const files = isFinite(content[startIndex]) ? [] : [content[startIndex]];
  return [...files, ...content.slice(startIndex + 1)];
};

const parser = (content) => {
  const options = { '-n': 10, '-c': 0 };
  let option = '', lastOptionIndex = 0;

  for (let index = 0; index < content.length; index++) {
    if (isOption(content[index])) {
      const [key, value] = getValue(content[index], content[index + 1]);
      option = key;
      options[key] = value;
      lastOptionIndex = index + 1;
    }
  }

  const files = getFiles(lastOptionIndex, content);
  return [option, options[option], files];
};

const optionsObject = (option, count, files) => {
  return {
    files: files,
    options: {
      option: option,
      count: +count || 10
    }
  };
};

const parseOptions = (...content) => {
  if (noOptionGiven(content)) {
    return optionsObject('-n', 10, content);
  }

  let option, count, files;
  try {
    [option, count, files] = parser(content);
  } catch (error) {
    throw { error: 'illegal count' };
  }

  return optionsObject(option, count, files);
};

exports.parseOptions = parseOptions;

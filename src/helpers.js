export const getRandomIntArray = (size = 1, limit = 1) => {
  const result = [];
  while (result.length < size) {
    let randInt = Math.floor(Math.random() * limit + 1);
    if (result.indexOf(randInt) === -1) result.push(randInt);
  }
  return result;
};

export const getPluralString = (num, assoc) => {
  const form = new Intl.PluralRules("ru-RU").select(num);
  return assoc[form];
};

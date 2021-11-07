const reverseInt = (number) => {
  //Implementación
  if (!Number.isInteger(number)) {
    throw new Error();
  }

  const strNum = number.toString().split('').reverse().join('');

  return number < 0 ? parseInt(strNum) * -1 : parseInt(strNum);
};

module.exports = {
  reverseInt,
};

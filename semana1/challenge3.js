const capitalizeLetters = (str) => {
  //Implementación
  return str
    .split(' ')
    .map((e) => `${e.charAt(0).toUpperCase()}${e.slice(1)}`)
    .join(' ');
};

module.exports = {
  capitalizeLetters,
};

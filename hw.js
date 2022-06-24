function calcPension(year) {
  if (typeof year !== "number") {
    return `You can indicate only number`;
  }
  let pension = 65;
  let answerAge = pension - year;
  let currentYear = 2022;
  let answerYear = currentYear + answerAge;
  return `Your pension will come in ${answerAge} years, in ${answerYear} year`;
}

console.log(calcPension(100));

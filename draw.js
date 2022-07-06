function drawInConsole(width, symbol) {
  let str = '';
  for (let i = 1; i <= width; i++) {
    str += symbol;
  }
  return str;
}
  
console.log(drawInConsole(50, 's'))
console.log(drawInConsole(70, 'I'))
console.log(drawInConsole(100, 'x'))

const drawInConsole2 = (w, s) => Array(w).fill(s).join('');
const drawInConsole3 = (w, s) => s.repeat(w);

console.log(drawInConsole2(50, 's'))
console.log(drawInConsole2(70, 'I'))
console.log(drawInConsole2(100, 'x'))
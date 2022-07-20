const MORSE = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '-.-.--': '!',
    '.......': ' '
  };
const morseCode = Object.keys(MORSE);
const charts = Object.values(MORSE);
const input = ('.... . .-.. .-.. --- ....... .-- --- .-. .-.. -.. -.-.--').split(' ');
let output = '';
for (let index = 0; index < input.length; index++) {
    // const element = input[index];
    // const translate =  morseCode.indexOf(element);
    // output += (charts[translate]).toUpperCase();
    output += MORSE[input[index]].toUpperCase();
}

console.log(output);
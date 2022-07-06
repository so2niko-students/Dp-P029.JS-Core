function dna(initial) {
    let pairs = {
      A: "T",
      T: "A",
      G: "C",
      C: "G",
    };
    return initial.replace(/[ATCG]/g, function (match) {
      return pairs[match];
    });
  }
  
//   console.log(dna("ATTCG"));
let dn = 'Dnipro';
//Case 1 - two strings
// console.log(dn.replace('i', 'u'));
// console.log('in the Dnipro'.replace('i', 'u'));
// console.log('in the Dnipro'.replaceAll('i', 'u'));

//case 2 regExp and string
// console.log('in the Dnipro'.replace(/[ieo]/, 'u'));
// console.log('in the Dnipro'.replace(/[ieo]/g, 'u'));

//case 3 regExp and regExp
// console.log('in the Dnipro'.replace(/([ieo])/, '=($1)-($1)='));
// console.log('Nick Sotula'.replace(/^(\w+)\s(\w+)$/, '$2 $1'));

//case 4 regExp and function
console.log('in the Dnipro'.replace(/[oie]/g, match => match.toUpperCase()))
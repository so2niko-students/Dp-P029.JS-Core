function isPasportIdentification(passport) {
    return /^[a-z]{2}[-\.\*\~]?\d{6}$/i.test(passport);
  }

console.log('fdslfkjds;lfkj343434fdgsdf gsdfgsdf gdf', isPasportIdentification('fdslfkjds;lfkj343434fdgsdf gsdfgsdf gdf'));
console.log('kj343434', isPasportIdentification('kj343434'));
//AH-234567
//AH--456789
//AH..................333444

//!точно стільки-то
// {10}
//!діапазон
// {3, 6} - 3, 4, 5, 6
//!не менше
//{2,} - 2, 3, 4, 5, 6, 7, .....
//!не менше одного {1,}
//+  - 1,2,3,4,5,6,...
//!пофіг {0,}
//*   - 0,1,2,3,4,5,6,...
//!може бути, а може і не бути {0,1}
// ?


function NumberIdentification(number) {
    return /^\+?\d{12}$/.test(number);
  }

//   /a(?!…)/


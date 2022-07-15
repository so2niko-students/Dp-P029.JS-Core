// Написати функцію, яка замінює в отриманому рядку великі літери на маленькі, малі – на великі, а цифри – на знак нижнього підкреслення.
function change(str) {
    return str.replace(/\w/g, s => {
        const _ = '_';
        const sL = s.toLowerCase();
        const sU = s.toUpperCase();
        
        if(sL === sU) return _;
        return s === sL ? sU : sL;
       });
  }
  
  const testText = 'FOR the GOOD2 _of the PEOPLE';
  console.log(testText);
  console.log(change(testText));
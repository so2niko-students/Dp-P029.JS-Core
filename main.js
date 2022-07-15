document.onclick = () => console.log('click on document');
document.addEventListener('click', () => console.log('click on document'));

/*
    getElementById() -- 1 el
    getElementsByClassName() -- pseudo Array
    getElementsByTagName() -- pseudo Array
    querySelector() -- 1 el
    querySelectorAll() -- pseudo Array
*/

document.body.addEventListener('pointerlockchange', console.log);
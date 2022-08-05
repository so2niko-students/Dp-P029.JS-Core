exports.summator = function(q){
    const a = +q.a;
    const b = +q.b;
    const op = q.op;
    console.log(a, b, op);
    let r;
    switch(op){
        case 'mu' : r = a * b; break;
        case 'pl' : r = a + b; break;
        case 'mi' : r = a - b; break;
        case 'di' : r = a / b; break;
        default : r = '';
    }
    return r;
}
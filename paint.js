function paintFigure() {
    let askWidth;
    let askSymbol;
    let isInValid = false;

    do{
        
        askWidth = +prompt('Width');
        askSymbol = prompt('Symbol');

        if(isNaN(askWidth) || !askSymbol){
            isInValid = true;
            alert('Uncorrect value of width. Try again');
        }else{
            isInValid = false;
        }
    }while(isInValid);
    
    console.log(paintF(askWidth, askSymbol));
}

function paintF(askWidth, askSymbol){
    let finalPaint = '';
    for (let i = 0; i < askWidth; i++) {
        finalPaint += `${askSymbol}`;
    }
    return finalPaint;
}

paintFigure();
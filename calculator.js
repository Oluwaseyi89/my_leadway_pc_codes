let btnObj = document.getElementsByClassName('gen-btn');

let screenObj = document.getElementById('screen');

let backspace = document.getElementById('backspace');

let inputText = "";
let equalPressed = false;

function replaceOperator (expression) {

    let replaceDiv = expression.replaceAll("÷", "/");

    let replaceMult = replaceDiv.replaceAll("x", "*");

    return replaceMult;
}



Array.from(btnObj).forEach(item => {
    item.addEventListener('click', () => {
        let btnVal = item.innerHTML;

        switch(btnVal) {
            case '+': inputText += " + ";
                        equalPressed = false;
                    break;
            case '-': inputText += " - ";
                        equalPressed = false;
                    break;
            case 'x': inputText += " x ";
                        equalPressed = false;
                    break;
            case '÷': inputText += " ÷ ";
                        equalPressed = false;
                    break;
            case 'C': inputText = "";
                    break;
            case 'AC': inputText = "";
                    break;
            case '=': inputText = eval(replaceOperator(screenObj.innerHTML.toString())).toString();
                        equalPressed = true;
                    break;
            default: 
            inputText = equalPressed ? item.innerHTML : (inputText + item.innerHTML);
            if(equalPressed) equalPressed = false;
        }

        screenObj.innerHTML = inputText;

    });
});

backspace.addEventListener('click', () => {
        inputText = inputText.slice(0, -1);
        screenObj.innerHTML = inputText.toString();
});

document.addEventListener('keypress', (e) => {
        switch (e.key) {
                case '1': inputText += 1;
                break;
                case '2': inputText += 2;
                break;
                case '3': inputText += 3;
                break;
                case '4': inputText += 4;
                break;
                case '5': inputText += 5;
                break;
                case '6': inputText += 6;
                break;
                case '7': inputText += 7;
                break;
                case '8': inputText += 8;
                break;
                case '9': inputText += 9;
                break;
                case '0': inputText += 0;
                break;
                case '.': inputText += '.';
                break;
                case '+': inputText += " + ";
                        equalPressed = false;
                break;
                case '-': inputText += " - ";
                        equalPressed = false;
                break;
                case 'x': inputText += " x ";
                        equalPressed = false;
                break;
                case '/': inputText += " ÷ ";
                        equalPressed = false;
                break;
                case 'c': inputText = "";
                break;
                case '=': inputText = eval(replaceOperator(screenObj.innerHTML.toString())).toString();
                        equalPressed = true;
                    break;
                case 'Enter': inputText = eval(replaceOperator(screenObj.innerHTML.toString())).toString();
                        equalPressed = true;
                    break;
        }
        screenObj.innerHTML = inputText;
});


document.addEventListener('keydown', (e) => {
        if(e.key == 'Backspace') {
                inputText = inputText.slice(0, -1);
                screenObj.innerHTML = inputText;
                backspace.style.backgroundColor = 'chartreuse';
                setTimeout(() => {
                        backspace.style.backgroundColor = 'white';
                }, 500);
        }
});

Array.from(btnObj).forEach(item => {
        let eachBtn = item.innerHTML;

        document.addEventListener('keypress', (e) => {
                if(e.key.toString() === eachBtn.toString()) {
                        item.style.backgroundColor = 'chartreuse';
                        setTimeout(() => {
                                item.style.backgroundColor = 'white';
                        }, 500);
                }
        });
});




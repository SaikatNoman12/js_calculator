const display = document.querySelector('#input');


const buttonAll = document.querySelectorAll('.btn');
buttonAll.forEach((btn) => {
    btn.addEventListener('click', e => {

        let btnText = e.target.innerText;

        if (btnText === 'x') {

            btnText = '*';

        }
        if (btnText === '÷') {

            btnText = '/';

        }

        display.value += btnText;

    });
});


const equal = document.querySelector('.equal-btn');
equal.addEventListener('click', () => {

    if (!(display.value)) {

        display.value = '';
        
    }
    else {

        display.value = eval(display.value);
    
    }

});


const sin = document.querySelector('.sin');
sin.addEventListener('click', () => {

    display.value = Math.sin(display.value);

});


const tan = document.querySelector('.tan');
tan.addEventListener('click', () => {

    display.value = Math.tan(display.value);

});


const cos = document.querySelector('.cos');
cos.addEventListener('click', () => {

    display.value = Math.cos(display.value);

});


const pow = document.querySelector('.pow');
pow.addEventListener('click', () => {

    display.value = Math.pow(display.value, 2);

});


const sqrt = document.querySelector('.sqrt');
sqrt.addEventListener('click', () => {

    display.value = Math.sqrt(display.value, 2);

});


const log = document.querySelector('.log');
log.addEventListener('click', () => {

    if (!display.value) {

        display.value = '';

    }
    else {

        display.value = Math.log(display.value);

    }

});


const pi = document.querySelector('.pi');
pi.addEventListener('click', () => {

    display.value = 3.14159265359;

});


const e = document.querySelector('.e');
e.addEventListener('click', () => {

    display.value = 2.7182182846;

});


const fact = document.querySelector('.fact');
fact.addEventListener('click', () => {

    if (display.value <= 170) {

        let i;
        let num = display.value;
        let f = 1;

        for (i = 1; i <= num; i++) {

            f *= i;
        
        }
        i -= 1;

        display.value = f;
    
    }
    else {

        display.value = '';
    
    }

});


const backSpace = document.querySelector('.backspace');
backSpace.addEventListener('click', () => {

    display.value = display.value.substr(0, display.value.length - 1);

});


const clearDisplay = document.querySelector('.clear');
clearDisplay.addEventListener('click', () => {

    display.value = '';

});


const main = document.querySelector('main');
const darkBtn = document.querySelector('.dark');
const icon = document.querySelector('.dark i');

darkBtn.addEventListener('click', () => {

    main.classList.toggle('changeColor');

    if (icon.classList[1].match('fa-sun')) {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
    else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }

});




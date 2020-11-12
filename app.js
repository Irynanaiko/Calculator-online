window.addEventListener("DOMContentLoaded", () => {
    const displayRes = document.querySelector('.display-result');
    const displayOp = document.querySelector('.display-operation');
    const equals = document.querySelector('.equals');
    const clear = document.querySelector('.clear');
    const num = document.querySelectorAll('[data-num]');
    const ops = document.querySelectorAll('.ops');
    const divZero = document.querySelector('.div-zero');

    // Digits
    num.forEach((button) => {
        button.addEventListener('click', digitPressed);
    });

    function digitPressed(ev) {
        displayRes.value += ev.target.innerText;
    }

    function digitPressed(ev) {
        displayOp.value += ev.target.innerText;
    }

    // Opers

    ops.forEach((button) => {
        button.addEventListener('click', operPressed);
    });

    function operPressed(ev) {
        displayRes.value += ev.target.innerText;
    }

    function operPressed(ev) {
        displayOp.value += ev.target.innerText;
    }

    // Equal
    equals.addEventListener('click', calculate);

    function calculate() {
        displayRes.value = eval(displayOp.value);
    }

    // Clear
    clear.addEventListener('click', () => (displayRes.value = '', displayOp.value = ''));

    // By zero
    divZero.addEventListener('click', divByZero);

    function divByZero() {
        let dispContent = eval(displayRes.value);
        if (dispContent == 'Infinity') {
            displayRes.value = 'Помилка!';
        }

    }

    // Extra operators
    // Minus
    const minus = document.querySelector('.minus');

    minus.addEventListener('click', extraMinus);

    function extraMinus() {
        let dispContent = displayRes.value;
        if (dispContent.includes('--')) {
            displayRes.value = 'Помилка';
        }
    }
    // Plus
    const plus = document.querySelector('.plus');

    plus.addEventListener('click', extraPlus);

    function extraPlus() {
        let dispContent = displayRes.value;
        if (dispContent.includes('++')) {
            displayRes.value = 'Помилка';
        }
    }

    // Multy
    const multy = document.querySelector('.multy');

    multy.addEventListener('click', extraMulty);

    function extraMulty() {
        let dispContent = displayRes.value;
        if (dispContent.includes('**')) {
            displayRes.value = 'Помилка';
        }
    }

    // Division
    const div = document.querySelector('.div');

    div.addEventListener('click', extraDiv);

    function extraDiv() {
        let dispContent = displayRes.value;
        if (dispContent.includes('//')) {
            displayRes.value = 'Помилка';
        }
    }

    // Dots
    const dots = document.querySelector('.dots');

    dots.addEventListener('click', extraDots);

    function extraDots() {
        let dispContent = displayRes.value;
        if (dispContent.includes('..')) {
            displayRes.value = 'Помилка';
        }
    }

    // Open modal

    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    const modal = document.querySelector('.modal');

    open.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    //Clock
    setInterval(() => {
        document.querySelector(".clock").innerText = new Date().toLocaleTimeString();
    }, 1000);

    // Theme
    const theme = document.querySelector('.theme');

    theme.addEventListener('click', changeTheme);

    let clickTimes = 0;

    function changeTheme() {
        clickTimes++;

        let main = document.querySelector('.calc-main');
        let digits = document.querySelectorAll('.num');
        let header = document.querySelector('.calc-header');

        switch (clickTimes) {
            case 1:
                main.style.backgroundColor = '#fff';
                modal.style.backgroundColor = '#fff';
                header.style.backgroundColor = '#fff';
                header.style.color = '#000';
                displayRes.style.color = '#000';
                close.style.color = "#000";

                digits.forEach(item => {
                    item.style.backgroundColor = '#f2f8fc';
                    item.style.color = '#000';
                });
                break;

        }



    }


    // Interest

    const interest = document.querySelector('.interest');

    interest.addEventListener('click', interestPressed);

    function interestPressed(num, interest) {
        displayRes.value = (num / 100) * interest;
    }




});
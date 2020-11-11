window.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector('.display');
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
        display.value += ev.target.innerText;
    }

    // Opers

    ops.forEach((button) => {
        button.addEventListener('click', operPressed);
    });

    function operPressed(ev) {
        display.value += ev.target.innerText;
        // display.value.style.color = '#56c9da';
    }

    // Equal
    equals.addEventListener('click', calculate);

    function calculate() {
        display.value = eval(display.value);
    }

    // Clear
    clear.addEventListener('click', () => (display.value = ''));

    // By zero
    divZero.addEventListener('click', divByZero);

    function divByZero() {
        let dispContent = eval(display.value);
        if (dispContent == 'Infinity') {
            display.value = 'Ви не можете ділити на 0';
            // display.value.classList.add('.broken');
        }

    }

    // Extra operators
    ops.forEach((button) => {
        button.addEventListener('click', multyOps);
    });

    function multyOps() {
        let dispContent = display.value;
        if (dispContent
            .includes('..' || '++' || '==' || '--' || '**' || '//')) {
            display.value = 'Ви не можете так робити';
        }
    }


});
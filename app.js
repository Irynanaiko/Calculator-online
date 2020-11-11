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

    // Opers

    ops.forEach((button) => {
        button.addEventListener('click', operPressed);
    });

    function operPressed(ev) {
        displayRes.value += ev.target.innerText;
        // displayRes.value.style.color = '#56c9da';
    }

    // Equal
    equals.addEventListener('click', calculate);

    function calculate() {
        displayRes.value = eval(displayRes.value);
    }

    // Clear
    clear.addEventListener('click', () => (displayRes.value = ''));

    // By zero
    divZero.addEventListener('click', divByZero);

    function divByZero() {
        let dispContent = eval(displayRes.value);   
        if (dispContent == 'Infinity') {
            displayRes.value = 'Помилка!';
            // displayRes.value.classList.add('.broken');

            console.log(dispContent);
        }

    }

    // Extra operators
    ops.forEach((button) => {
        button.addEventListener('click', multyOps);
    });

    function multyOps() {
        let dispContent = displayRes.value;
        if (dispContent
            .includes('..' || '++' || '==' || '--' || '**' || '//')) {
            displayRes.value = 'Ви не можете так робити';
        }
    }


});
let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (operator === 'sqrt') {
        display.value += `√(`;
    } else if (operator === 'power') {
        display.value += ` ^ `;
    } else {
        display.value += ` ${operator} `;
    }
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.trim().slice(0, -1);
}

function calculateResult() {
    let expression = display.value
        .replace(/plus/g, '+')
        .replace(/minus/g, '-')
        .replace(/multiply/g, '*')
        .replace(/divide/g, '/')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/\^/g, '**');

    try {
        display.value = eval(expression);
    } catch (e) {
        display.value = 'خطأ';
    }
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('button');

    if (lang === 'ar') {
        elements.forEach((el) => {
            if (el.innerText === 'divide') el.innerText = 'قسمة';
            else if (el.innerText === 'multiply') el.innerText = 'ضرب';
            else if (el.innerText === 'minus') el.innerText = 'ناقص';
            else if (el.innerText === 'plus') el.innerText = 'زائد';
            else if (el.innerText === '√') el.innerText = 'جذر';
            else if (el.innerText === 'C') el.innerText = 'مسح';
            else if (el.innerText === '←') el.innerText = 'حذف';
            else if (el.innerText === '=') el.innerText = 'يساوي';
        });
    } else {
        elements.forEach((el) => {
            if (el.innerText === 'قسمة') el.innerText = 'divide';
            else if (el.innerText === 'ضرب') el.innerText = 'multiply';
            else if (el.innerText === 'ناقص') el.innerText = 'minus';
            else if (el.innerText === 'زائد') el.innerText = 'plus';
            else if (el.innerText === 'جذر') el.innerText = '√';
            else if (el.innerText === 'مسح') el.innerText = 'C';
            else if (el.innerText === 'حذف') el.innerText = '←';
            else if (el.innerText === 'يساوي') el.innerText = '=';
        });
    }
}

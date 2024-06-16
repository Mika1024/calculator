let input = document.getElementById('input');
const add = (str) => {
    input.value += str;
}

const calculate = () => {
    try {
        let value = input.value;
        value = value.replaceAll('sin', 'Math.sin')
        value = value.replaceAll('cos', 'Math.cos')
        value = value.replaceAll('pow', 'Math.pow')
        value = value.replaceAll('sqrt', 'Math.sqrt')
        input.value = eval(value)
    } catch (e) {
        input.value = ''
        input.placeholder = 'Invalid argument'
    }
}

window.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        calculate()
    }
}, false);
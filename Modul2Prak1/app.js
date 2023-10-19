function calculate() {
    try {
        // Mengganti koma dengan titik sebelum perhitungan
        let expression = kalkulator.display.value.replace(/,/g, '.');
        kalkulator.display.value = eval(expression);
    } catch (error) {
        kalkulator.display.value = 'Error';
    }
}

function clearInput() {
    kalkulator.display.value = kalkulator.display.value.slice(0, -1);
}

function clearAll() {
    kalkulator.display.value = '';
}

function addSymbol(symbol) {
    kalkulator.display.value += symbol;
}
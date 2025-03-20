function compareNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    document.getElementById('comparisonResult').innerHTML = `
        ${num1} > ${num2}: ${num1 > num2}<br>
        ${num1} < ${num2}: ${num1 < num2}<br>
        ${num1} == ${num2}: ${num1 == num2}<br>
        ${num1} != ${num2}: ${num1 != num2}
    `;
}
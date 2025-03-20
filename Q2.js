function stringOperations() {
    const str1 = document.getElementById('string1').value;
    const str2 = document.getElementById('string2').value;

    // Display Results
    document.getElementById('result').innerHTML = `
        Concatenated: ${str1 + str2}<br>
        Length of String 1: ${str1.length}<br>
        Length of String 2: ${str2.length}<br>
        Uppercase String 1: ${str1.toUpperCase()}<br>
        Lowercase String 2: ${str2.toLowerCase()}
    `;
}
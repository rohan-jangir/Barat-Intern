function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const resultDiv = document.getElementById("result1");

    if (celsiusInput.value === "") {
        resultDiv.textContent = "Please enter a value.";
    } else {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        resultDiv.textContent = `${celsius} degrees Celsius = ${fahrenheit.toFixed(2)} degrees Fahrenheit.`;
    }
}

function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultDiv = document.getElementById("result2");

    if (fahrenheitInput.value === "") {
        resultDiv.textContent = "Please enter a value.";
    } else {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        resultDiv.textContent = `${fahrenheit} degrees Fahrenheit = ${celsius.toFixed(2)} degrees Celsius.`;
    }
}
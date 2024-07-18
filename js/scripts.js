//javascript
document.addEventListener('DOMContentLoaded', (event) => {
    function calculateBMI(weight, height) {
        // Convert height from cm to meters
        height = height / 100;
        // Calculate BMI
        let bmi = weight / (height * height);
        return bmi.toFixed(1);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return "berat badan normal (Ideal)";
        } else if (bmi >= 25 && bmi < 29.9) {
            return "berat badan yang berlebih";
        } else {
            return "Kegemukan (Obesitas)";
        }
    }

    function updateResult() {
        let weight = parseFloat(document.getElementById('input-berat-badan').value);
        let height = parseFloat(document.getElementById('input-tinggi-badan').value);

        if (isNaN(weight) || isNaN(height)) {
            alert("Please enter valid numbers for weight and height.");
            return;
        }

        let bmi = calculateBMI(weight, height);
        let category = getBMICategory(bmi);

        document.getElementById('bmi-result').innerText = bmi;
        document.querySelector('.result-section p:nth-of-type(2)').innerText = `Anda memiliki ${category}`;
    }

    document.querySelector('.submit').addEventListener('click', updateResult);

    document.querySelector('.reset').addEventListener('click', () => {
        document.getElementById('input-usia').value = '';
        document.getElementById('input-berat-badan').value = '';
        document.getElementById('input-tinggi-badan').value = '';
        document.getElementById('bmi-result').innerText = '';
        document.querySelector('.result-section p:nth-of-type(2)').innerText = '';
    });
});


const form = document.getElementById('bmiForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value) / 100;

      if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let status = '';

        if (bmi < 18.5) {
          status = 'Underweight';
        } else if (bmi < 24.9) {
          status = 'Normal weight';
        } else if (bmi < 29.9) {
          status = 'Overweight';
        } else {
          status = 'Obesity';
        }

        resultDiv.textContent = `Your BMI is ${bmi} (${status})`;
      } else {
        resultDiv.textContent = 'Please enter valid values.';
      }
    });
// script.js
document.getElementById('mortgage-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const amount = parseFloat(document.getElementById('amount').value);
  const term = parseFloat(document.getElementById('term').value) * 12; // Convert years to months
  const rate = parseFloat(document.getElementById('rate').value) / 100 / 12; // Convert annual rate to monthly
  const type = document.querySelector('input[name="type"]:checked').value;

  let monthlyPayment = 0;
  let totalPayment = 0;

  if (type === 'repayment') {
      // Calculate monthly payment for repayment mortgage
      monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -term));
      totalPayment = monthlyPayment * term;
  } else if (type === 'interest-only') {
      // Calculate monthly payment for interest-only mortgage
      monthlyPayment = amount * rate;
      totalPayment = monthlyPayment * term + amount; // Add the principal amount at the end
  }

  document.getElementById('monthly-payment').querySelector('span').textContent = monthlyPayment.toFixed(2);
  document.getElementById('total-payment').querySelector('span').textContent = totalPayment.toFixed(2);
});
document.getElementById('button').addEventListener('click', calculateRepayments);

// Add event listeners to input fields to recalculate on change
document.getElementById('amount').addEventListener('input', calculateRepayments);
document.getElementById('term').addEventListener('input', calculateRepayments);
document.getElementById('rate').addEventListener('input', calculateRepayments);
document.querySelectorAll('input[name="type"]').forEach(radio => {
    radio.addEventListener('change', calculateRepayments);
});
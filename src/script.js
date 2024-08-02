document.getElementById('button').addEventListener('click', function() {
    // Get the input values
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const terms = parseFloat(document.getElementById('terms').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const type = document.querySelector('input[name="type"]:checked').value;
    document.getElementById('results').textContent = resultText;
   
  
   let resultText = ''
  
    if (type === 'repayment') {
      // Calculate the monthly repayment for a repayment mortgage
      const monthlyRate = rate / 12;
      const numberOfPayments = terms * 12;
      const monthlyRepayment = (amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -numberOfPayments));
      resultText = `Your monthly repayment is £${monthlyRepayment.toFixed(2)}.`;
    } else if (type === 'interest-only') {
      // Calculate the monthly interest-only payment
      const monthlyInterest = amount * (rate / 12);
      resultText = `Your monthly interest-only payment is £${monthlyInterest.toFixed(2)}.`;
    }
  
    // Update the results div
    document.getElementById('results').innerHTML = `
    <h2>Result</h2>
    <p>${resultText}</p>
    `;
   
});


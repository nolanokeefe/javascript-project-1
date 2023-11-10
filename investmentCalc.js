function submitData() {
  var initialbalance = document.getElementById('initialBalance').value;
  var interestrate = document.getElementById('interestRate').value;
  var investmentduration = document.getElementById('investmentDuration').value;

  if (initialbalance < 0 || investmentduration < 0 || interestrate < 0) {
    document.getElementById('errorOutput').innerHTML =
      'Please enter valid data in each field!';

    return;
  }

  if (
    initialbalance === ' ' ||
    investmentduration == 0 ||
    interestrate === ' '
  ) {
    document.getElementById('errorOutput').innerHTML =
      'Please enter valid data in each field!';
    return;
  }

  var total = [
    initialbalance * (interestrate / 100) * (investmentduration / 12),
  ];

  var grandTotal = parseFloat(total) + parseFloat(initialbalance);

  document.getElementById('investyield').style.display = 'block';
  document.getElementById('yield').innerHTML =
    'Your future balance will be $' + grandTotal;
}

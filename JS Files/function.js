function deductFromWallet (id) {
    const wallet_bal = parseFloat(document.getElementById('wallet').innerText);
    const donate = parseFloat(document.getElementById(id).value);
    const new_bal = wallet_bal - donate;
    document.getElementById('wallet').innerText = new_bal;
}
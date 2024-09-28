document.getElementById('go-to-blog')
    .addEventListener('click', function() {
        window.location.href = '/blog.html';
    });

document.getElementById('donate-quota').addEventListener('click', function() {
    const cur_bal = parseFloat(document.getElementById('quota-coins').innerText);
    const donate = parseFloat(document.getElementById('input-quota').value);
    const wallet_bal = parseFloat(document.getElementById('wallet').innerText)
    if(donate <= 0) {
        alert('You can not donate this amount');
        return;
    }
    else if(isNaN(donate)) {
        alert('Please enter valid number to donate');
        return;
    }
    else if(donate > wallet_bal) {
        alert('Insufficient amount in your balance');
        return;
    }
    const new_bal = cur_bal + donate;
    document.getElementById('quota-coins').innerText = new_bal;
    deductFromWallet('input-quota');
    my_modal_1.showModal();
})

document.getElementById('donate-feni').addEventListener('click', function() {
    const cur_bal = parseFloat(document.getElementById('feni-coins').innerText);
    const donate = parseFloat(document.getElementById('input-feni').value);
    const wallet_bal = parseFloat(document.getElementById('wallet').innerText)
    if(donate <= 0) {
        alert('You can not donate this amount');
        return;
    }
    else if(isNaN(donate)) {
        alert('Please enter valid number to donate');
        return;
    }
    else if(donate > wallet_bal) {
        alert('Insufficient amount in your balance');
        return;
    }
    const new_bal = cur_bal + donate;
    document.getElementById('feni-coins').innerText = new_bal;
    deductFromWallet('input-feni');
    my_modal_1.showModal();
})

document.getElementById('donate-flood').addEventListener('click', function() {
    const cur_bal = parseFloat(document.getElementById('flood-coins').innerText);
    const donate = parseFloat(document.getElementById('input-flood').value);
    const wallet_bal = parseFloat(document.getElementById('wallet').innerText)
    if(donate <= 0) {
        alert('You can not donate this amount');
        return;
    }
    else if(isNaN(donate)) {
        alert('Please enter valid number to donate');
        return;
    }
    else if(donate > wallet_bal) {
        alert('Insufficient amount in your balance');
        return;
    }
    const new_bal = cur_bal + donate;
    document.getElementById('flood-coins').innerText = new_bal;
    deductFromWallet('input-flood');
    my_modal_1.showModal();
})
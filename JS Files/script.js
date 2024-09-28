document.getElementById('go-to-blog')
    .addEventListener('click', function() {
        window.location.href = 'blog.html';
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
    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="w-4/5 mx-auto my-5 p-8 rounded-lg border-2 border-gray-300 space-y-5">
            <p id="donationDetails" class="font-bold text-xl">${donate} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p id="donationTimigs" class="font-light text-base">Date : ${time}</p>
        </div>
    `
    document.getElementById('history-page').appendChild(div);
});

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
    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="w-4/5 mx-auto my-5 p-8 rounded-lg border-2 border-gray-300 space-y-5">
            <p id="donationDetails" class="font-bold text-xl">${donate} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
            <p id="donationTimigs" class="font-light text-base">Date : ${time}</p>
        </div>
    `
    document.getElementById('history-page').appendChild(div);
});

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
    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="w-4/5 mx-auto my-5 p-8 rounded-lg border-2 border-gray-300 space-y-5">
            <p id="donationDetails" class="font-bold text-xl">${donate} Taka is Donated for Flood Relief in Noakhali,Bangladesh</p>
            <p id="donationTimigs" class="font-light text-base">Date : ${time}</p>
        </div>
    `
    document.getElementById('history-page').appendChild(div);
});

document.getElementById('btn-history').addEventListener('click', function() {
    document.getElementById('history-page').classList.remove('hidden');
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('btn-history').style.backgroundColor = "#B4F461";
    document.getElementById('btn-donation').style.backgroundColor = "white";
});

document.getElementById('btn-donation').addEventListener('click', function() {
    document.getElementById('donation-page').classList.remove('hidden');
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById('btn-donation').style.backgroundColor = "#B4F461";
    document.getElementById('btn-history').style.backgroundColor = "white";
});
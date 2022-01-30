let name = document.getElementById('name');
let kms = document.getElementById('kms');
let age = document.getElementById('age');

let eraseButton = document.getElementById('erase');

eraseButton.addEventListener ('click',
    function() {
        name.value = '';
        kms.value = '';
        age.value = '';
    }
);

let submitButton = document.getElementById('submit');

submitButton.addEventListener ('click',
    function() {
        let htmlTicket = document.querySelector('.ticket');
        htmlTicket.classList.add('active');
        let name = document.getElementById('name').value;
        let leftCol = document.querySelector('.left.col');
        leftCol.innerHTML += '<p class="bold">' + name + '</p>';
    }
);
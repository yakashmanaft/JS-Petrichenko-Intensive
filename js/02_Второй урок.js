



document.addEventListener('DOMContentLoaded', function () {

    let chooseBtn = document.getElementById('#choose'),
    receiveBtn = document.getElementById('#receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal');


    receiveBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

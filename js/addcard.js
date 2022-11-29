const $ = (selector) => document.querySelector(selector);

window.onload = function () {
  $('#addcardbtn').onclick = validate;
};

function validate() {
  let cname = $('#cname');
  let cardnumber = $('#cardnumber');
  
  if (cname.value == '') {
    cname.nextElementSibling.innerHTML = 'Please enter name on card';
  } 
  if (cardnumber.value == '') {
    cardnumber.nextElementSibling.innerHTML = 'Please enter card number';
  } 
}
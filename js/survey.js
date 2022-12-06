'use strict';

const $ = (selector) => document.querySelector(selector);

//Display the dynamic list of validation messgaes based on the input of the data.
const displayErrorMsgs1 = (msgs) => {
  let display = ' ';
  msgs.forEach((s) =>{
  display += `<li>${s}</li>`;
  });
  document.getElementById('vlidationMsgs').innerHTML = display;
};

const processEntries = () => {
  // get form controls to check for validity
  const restaurant = $('#restaurant_address');
  const peopleCount = $('#count');
  const dietary = $('#food');
  const feedback = $('#feedback');

  // create array for error messages
  const msgs = [];

  // check user entries for validity
  if (restaurant.value == '') {
    msgs[msgs.length] = 'Please enter a restaurant name.';
  }
  if (peopleCount.value == '') {
    msgs[msgs.length] = 'Please enter count of persons.';
  }
  if (dietary.value == '') {
    msgs[msgs.length] = 'Please select a food type.';
  }
  if (feedback.value == '') {
    msgs[msgs.length] = 'Please enter feedback.';
  }

  // submit the form or notify user of errors
  if (msgs.length == 0) {
    // no error messages
    alert('Survey Successfully stored');
  } else {
    displayErrorMsgs1(msgs);
  }
};

const resetForm = () => {
  $('form').reset();

  // remove error messages
  $('ul').remove();

  $('#restaurant_address').focus();
};

document.addEventListener('DOMContentLoaded', () => {
  $('#submit').addEventListener('click', processEntries);
  $('#reset_form').addEventListener('click', resetForm);
  $('#restaurant_address').focus();
});

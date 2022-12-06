'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  // get form controls to check for validity
  const names = $('#name_s');
  const email = $('#email_address');
  const phone = $('#phone');
  const country = $('#country');
  const dates = $('#dt');

  // check user entries for validity
  let isValid = true;
  if (names.value == '') {
    names.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    names.nextElementSibling.textContent = '';
  }
  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    email.nextElementSibling.textContent = '';
  }

  if (phone.value == '') {
    phone.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    phone.nextElementSibling.textContent = '';
  }

  if (country.value == '') {
    country.nextElementSibling.textContent = 'Please select a country.';
    isValid = false;
  } else {
    $('#country').nextElementSibling.textContent = '';
  }

  if (dates.date == '') {
    dates.nextElementSibling.textContent = 'Please select birth date.';
    isValid = false;
  } else {
    dates.nextElementSibling.textContent = '';
  }

  // submit the form if all fields are valid
  if (isValid == true) {
    alert('Account details Successfully updated');
  }
};

const processDelEntries = () => {
  // get form controls to check for validity
  const res5 = $('#res-5');
  const res6 = $('#feedback');

  // check user entries for validity
  let isValid = true;
  var a = 0, rdbtn=document.getElementsByName("reason");
  for(let i=0;i<rdbtn.length;i++) {
    if(rdbtn.item(i).checked == false) {
    a++;
    }
    }
    if(a == rdbtn.length) {
      res5.nextElementSibling.textContent = 'Please choose your Reason';
      isValid = false;
    } else {
      res5.nextElementSibling.textContent = '';
    }

  if (res6.value == '') {
    res6.nextElementSibling.textContent = 'Please Fill >> "FEEDBACK"';
    isValid = false;
  } else {
    res6.nextElementSibling.textContent = '';
  }

  console.log(isValid);
  // submit the form if all fields are valid
  if (isValid == true) {
    alert('Account Successfully Deleted');
  }
  else {
    alert('Please fill the required details');
  }
};

const processNPEntries = () => {
  // get form controls to check for validity
  const res7 = $('#not-4');
  const res8 = $('#feedback_np');

  // check user entries for validity
  let isValid = true;
  var b = 0, chkbtn=document.getElementsByName("notpref");
  for(let j=0;j<chkbtn.length;j++) {
    if(chkbtn.item(j).checked == false) {
    b++;
    }
    }
    if(b == chkbtn.length) {
      res7.nextElementSibling.textContent = 'Please choose atleast one Prefrence';
      isValid = false;
    } else {
      res7.nextElementSibling.textContent = '';
    }

  if (res8.value == '') {
    res8.nextElementSibling.textContent = 'Please Fill >> "FEEDBACK"';
    isValid = false;
  } else {
    res8.nextElementSibling.textContent = '';
  }

  console.log(isValid);
  // submit the form if all fields are valid
  if (isValid == true) {
    alert('Notification preference Successfully Updated');
  }
  else {
    alert('Please fill the required details');
  }
};

// the event handler for the click event of each h2 element
const toggle = (evt) => {
  console.log(evt.currentTarget);
  const h2Element = evt.currentTarget; // get the clicked h2 element
  const divElement = h2Element.nextElementSibling; // get h2's sibling div

  h2Element.classList.toggle('minus');
  divElement.classList.toggle('open');

  evt.preventDefault(); // cancel default action of h2 tag's <a> tag
};

document.addEventListener('DOMContentLoaded', () => {
  // get the h2 tags
  console.log(settingss);
  const h2Elements = document.querySelectorAll('#settingss h2');

  // attach event handler for each h2 tag
  for (let h2Element of h2Elements) {
    h2Element.addEventListener('click', toggle);
  }
  // set focus on first h2 tag's <a> tag
  h2Elements[0].firstChild.focus();

  $('#choice').addEventListener('click', processEntries);
  $('#choice_s').addEventListener('click', processDelEntries);
  $('#choice_np').addEventListener('click', processNPEntries);
});

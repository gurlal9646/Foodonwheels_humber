$(document).ready(()=>{
  
  $.getJSON('/json/faq.json', function(jd) {
  let response = jd;
  if(response!=undefined && typeof(response) == 'object'){
    let questionList = response.faqs;     
     if(questionList.length > 0){
      let dis='';
      for(let question of questionList){
        dis+=`<div class="accordion-item">
        <button id="accordion-button-${question.questionId}" aria-expanded="false">
          <span class="accordion-title">${question.title}</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            ${question.descption}
          </p>
        </div>
      </div>`;
      }
      document.querySelector('#questionparent').innerHTML = dis; 
    }
  }

  const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
  });
});








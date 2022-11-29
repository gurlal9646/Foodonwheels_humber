$(document).ready(()=>{
  
    $.getJSON('/json/cards.json', function(jd) {
    let response = jd;
    if(response!=undefined && typeof(response) == 'object'){
      let cardList = response.cards;     
       if(cardList.length > 0){
        let dis='';
        for(let card of cardList){
          dis+=`<div class="paymentcardcolumn">
          <div class="card">
            <img class="card-image" src="${card.card_image}" alt="${card.image_alt}" />
            <p>${card.name}</p>
            <p>XXXX-XXXX-XXXX-${card.card_last_four}</p>
            <p>Expires on ${card.expiry_date}</p>
          </div>
        </div>`;
        }
        document.querySelector('#cardsparent').innerHTML = dis; 
      }
    }
    });
 });
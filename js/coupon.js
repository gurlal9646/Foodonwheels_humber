$(document).ready(()=>{
  
    $.getJSON('/json/coupon.json', function(jd) {
    let response = jd;
    if(response!=undefined && typeof(response) == 'object'){
      let couponList = response.coupons;     
       if(couponList.length > 0){
        let dis='';
        for(let coupon of couponList){
          dis+=` <div class="coupon" id="${coupon.couponId}">
          <div class="container" style="background-color: white;">
          <h2>${coupon.title}</h2>        
         </div>
         <div class="container"><p> Promo Code:<span class="promo">${coupon.promo}</span></p>
          <P class="expire">Expire: ${coupon.Expire}</P></div>
          </div>`;
        }
        document.querySelector('#maindiv').innerHTML = dis; 
      }
    }
  
  })
});
  
  
  
  
  
  
  
  
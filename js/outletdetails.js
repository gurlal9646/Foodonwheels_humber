let food = [];
let totalAmount = 0;

$(document).ready(function () {

  $.getJSON('/json/outletmenu.json', function(jd) {
    let response = jd;
    if(response!=undefined && typeof(response) == 'object'){
      let outletmenus = response.outletmenus;     
       if(outletmenus.length > 0){
        let dis='';
        for(let outlet of outletmenus){
          if(outlet.outletmenu.menucategories.length > 0){
            for(let menu of outlet.outletmenu.menucategories){
              dis+= `
              <div class="col-sm-6 col-12">
               <div class="card">
                 <h2 class="card-title">${menu.categoryname}</h2>
                 <div class="card-body">`;
                 for(let item of menu.items){
                  dis+=   `                
                  <div class="row foodItem">
                  <div class="col-9 foodItemName">
                    <p>
                      ${item.item_name}
                      <span>
                        <img
                          class="vegIcon"
                          src="../images/veg.webp"
                          alt="veg-icon"
                        />
                      </span>
                    </p>
                    <p class="text-muted-small">
                      <i class="fa fa-dollar"></i>${item.price}
                    </p>
                  </div>
                  <div class="col-3 addCol">
                    <span class="menuBtn minus"
                      ><i class="fa fa-minus-square-o"></i
                    ></span>
                    <span class="quantity">0</span>
                    <span class="menuBtn plus"
                      ><i class="fa fa-plus-square-o"></i
                    ></span>
                  </div>
                </div>
                <hr class="foodItemHr" />                           
                `
                 }
                 dis+=` </div> 
                        </div> 
                         </div>`;              
            }
          }
        }
        document.querySelector('#outletmenu').innerHTML = dis; 
      }
    }
    menulistener();
  });


let cartmenu = document.getElementById("cartmenu");

let span = document.getElementsByClassName("close")[0];

let modal = document.getElementById("myModal");


cartmenu.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});

function openWhatsapp() {

  if ($("#address")[0].value === "") {
    alert("Please Enter Address");
    return;
  } else {
    let total = 0;
    let address = $("#address")[0].value;
    let note = $("#note")[0].value;
    let wTxt = "*name*               *quantity* \n";

    for (var i = 0; i < food.length; i++) {
      let name = food[i][0];
      let quantity = food[i][1];
      total = total + food[i][1] * food[i][2];
      wTxt = wTxt + name + "      " + quantity + "  \n";
    }

    if ($("#note")[0].value === "") {
      wTxt =
        wTxt + "\n *Total Bill: " + total + "*" + "\n\n Address: " + address;
    } else {
      wTxt =
        wTxt +
        "\n *Total Bill: " +
        total +
        "*" +
        "\n\n Address: " +
        address +
        "\n Note: " +
        note;
    }

    let wTxtEncoded = encodeURI(wTxt);
    window.open("https://wa.me/6476774957?text=" + wTxtEncoded);
  }
}

function menulistener(){

$(".menuBtn").click(function () {
  let quantity = $(this).siblings(".quantity");
  let foodNameClicked = quantity
    .parent()
    .siblings("div")
    .children()
    .first()
    .text()
    .trim();
  let singleFoodAmount = Number(
    quantity.parent().siblings("div").children().last().text()
  );
  let isVeg = quantity
    .parent()
    .siblings("div")
    .children()
    .first()
    .children()
    .first()
    .children()
    .hasClass("vegIcon");

  let count = Number(quantity.text());
  if ($(this)[0].className.search("plus") > -1) {
    count = count + 1;
    quantity.text(count);
    ToCart(foodNameClicked, count, isVeg, singleFoodAmount);
  } else if ($(this)[0].className.search("minus") > -1) {
    if (count <= 0) {
      quantity.text(0);
    } else {
      count = count - 1;
      quantity.text(count);
      ToCart(foodNameClicked, count, isVeg, singleFoodAmount);
    }
  }
 });
}

function ToCart(foodNameClicked, foodQuantity, isVeg, singleFoodAmount) {
  let foodAlreadyThere = false;
  let foodPos;
  let node;
  if (isVeg) {
    node = '<img class="vegIcon" src="../images/veg.webp" alt="" />';
  } else {
    node = '<img class="nonVegIcon" src="../images/non-veg.webp" alt="" />';
  }
  for (var i = 0; i < food.length; i++) {
    if (food[i][0] === foodNameClicked) {
      foodAlreadyThere = true;
      foodPos = i;
      break;
    } else {
      foodAlreadyThere = false;
    }
  }

  if (foodAlreadyThere) {
    food.splice(foodPos, 1);
    food.push([foodNameClicked, foodQuantity, singleFoodAmount, node]);
  } else {
    food.push([foodNameClicked, foodQuantity, singleFoodAmount, node]);
  }

  // Remove Food items with quantity = 0
  for (var i = 0; i < food.length; i++) {
    if (food[i][1] === 0) {
      food.splice(i, 1);
    }
  }

  if (food.length !== 0) {
    $(".shoppingCart").addClass("shoppingCartWithItems");

    $(".cartContentDiv").empty();
    for (var i = 0; i < food.length; i++) {
      let cartTxt =
        '<div class="row cartContentRow"><div class="col-10"><div style="display:flex;"><p>' +
        food[i][0] +
        '</p> <p class="text-muted-small">' +
        food[i][3] +
        '<p></div><i class="fa fa-dollar"> ' +
        food[i][2] +
        '</i></p>  </div>  <div class="col-2"> <p class="text-muted-small" > <i class="fa fa-dollar"></i> ' +
        food[i][1] * food[i][2] +
        '</p>  <span class="cartQuantity"> ' +
        " <span> Qty : </span>" +
        food[i][1] +
        '</span> </div>  </div> <hr class="cartHr">';
      $(".cartContentDiv").append(cartTxt);
    }
  } else {
    $(".shoppingCart").removeClass("shoppingCartWithItems");

    $(".cartContentDiv").empty();
    $(".cartContentDiv").append(
      '<h1 class="text-muted">Your Cart is Empty</h1>'
    );
  }

  $(".shoppingCartAfter").text(food.length);

  if (food.length === 0) {
    totalAmount = 0;
  } else {
    totalAmount = totalAmount + singleFoodAmount;
  }

  $(".totalAmountDiv").empty();
  $(".totalAmountDiv").append(
    '<span class="totalAmountText">TOTAL AMOUNT : </span><br/>' +
      '<i class="fas fa-rupee-sign"></i> ' +
      totalAmount
  );
}

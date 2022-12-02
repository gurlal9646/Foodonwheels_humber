let food = [];
let totalAmount = 0;

$(document).ready(function () {

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

  function ToCart(foodNameClicked, foodQuantity, isVeg, singleFoodAmount) {
    let foodAlreadyThere = false;
    let foodPos;
    let node;
    if (isVeg) {
      node = '<img class="vegIcon" src="./images/veg.webp" alt="" />';
    } else {
      node = '<img class="nonVegIcon" src="./images/non-veg.webp" alt="" />';
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
          '<p></div><i class="fas fa-rupee-sign"> ' +
          food[i][2] +
          '</i></p>  </div>  <div class="col-2"> <p class="text-muted-small" > <i class="fas fa-rupee-sign"></i> ' +
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

  // Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
modal.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});

function openWhatsapp() {
  // console.log($('#address'));

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
    window.open("https://wa.me/917428789065?text=" + wTxtEncoded);
  }
}



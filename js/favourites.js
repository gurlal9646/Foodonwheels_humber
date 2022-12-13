//Reading and getting favourites outlet information from outlet.json
$().ready(function () {
    $.getJSON('../json/outlet.json', function (data) {
      console.log(data);
    let dis='';
    for(let i of data.outlets){
      dis += `<div class="restaurant_card">
            <img class="restaurant_img" src="${i.image}" />
            <div class="restaurant_brief">
              <p class="restaurant_title">${i.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#128158;</p>
              <p class="fow_fee">${i.dfee}</p>
              <p class="restaurant_rating">
                <span class="fa fa-star" style="color: coral"></span>
                <span class="fa fa-star" style="color: coral"></span>
                <span class="fa fa-star" style="color: coral"></span>
                <span class="fa fa-star" style="color: coral"></span>
                <span class="fa fa-star" style="color: coral"></span>git
              </p>
              <!-- Address -->
              <p class="restaurant_location">
                <i class="fa fa-map-marker"></i>&nbsp;
                ${i.address}<br/>
              </p>
              <p class="res_desc">${i.food} ${i.foodsymbol}</p>
            </div>
          </div>`;
    }
      document.getElementById('pdiv').innerHTML = dis;
    
    });
  });

  //Declaring an array of images
let myImagesArray = [
    '../images/Food_all.png',
    '../images/Food.jpeg',
    '../images/sandwich.png',
    '../images/iced_capp.jpeg',
  ];
  
  let myImagesArray1 = [
    '../images/Food.jpeg',
    '../images/Food_all.png',
    '../images/iced_capp.jpeg',
    '../images/sandwich.png',
  ];

  let myImagesArray2 = [
    '../images/sandwich.png',
    '../images/iced_capp.jpeg',
    '../images/Food_all.png',
    '../images/Food.jpeg',
  ];

  //Automatic slide to display the images
  let ImageNumber = 0;
  let difference = myImagesArray.length - 1;
  
  let delay = 1000; //milliseconds    1sec=1000milliseconds
  
  setInterval('ChangeImages(1)', delay);
  //-1 to show the slide backwards
  //1 to show the slide forwards
  
  function ChangeImages(direction) {
    //begin function
  
    ImageNumber = ImageNumber + direction;
  
    if (ImageNumber > difference) {
      ImageNumber = 0;
    }
  
    if (ImageNumber < 0) {
      ImageNumber = difference;
    } 
 
    document.getElementById('slideshow').src = myImagesArray[ImageNumber];
    document.getElementById('slideshow_f').src = myImagesArray1[ImageNumber];
    document.getElementById('slideshow_fs').src = myImagesArray2[ImageNumber];
  }
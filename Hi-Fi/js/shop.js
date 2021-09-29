document.addEventListener("DOMContentLoaded", () => {
  // Create the main category gallery
  fetchCategory();

  function fetchCategory() {
    let shopGallery = document.querySelector(".CategoryImg");

    fetch("./js/shop.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        /*everything is showing up in html*/

        var categoryNameFromHTML = getCategory();

        data.products.forEach((product) => {
          if (product.category_name === categoryNameFromHTML) {
            var buttonString = "";
            if (product.hasButom === true) {
              //if btnString has a value of true it shows in the view
              buttonString = `<button class="CategoryImg__gallery__add">Add to cart</button> `;
            }

            shopGallery.innerHTML += `
  
   
   <div class="CategoryImg__gallery">
  

 <div class="CategoryImg__img">
     <img src="images/cd_afspillere/${product.image}" alt="">
  
       <p class="CategoryImg__text">yamaha R-N402 network <br> HiFI Receiver</p>
       <p class="CategoryImg__price">£429.00 £329.00</p>
  
   <div class="CategoryImg__btn">
   ${buttonString}
   </div>
  </div>
   </div>    
   `;
          }
        });
      });

    function getCategory() {
      var url_string = window.location.href;
      var url = new URL(url_string);
      var category_name = url.searchParams.get("categoryName");
      return category_name;
    }

    // Create the Div Left

    fetch("./js/divLeft.json")
      .then((response) => response.json())
      .then((data) => {
        data.Categories.forEach((category) => {
          let divLeftCategory = document.querySelector(
            ".Main_shop_category__ul"
          );

          console.log(category.label);

          divLeftCategory.innerHTML += `
       
     
    
          <li><a href="shop_category.html?categoryName=${category.label}">${category.label}</a>
          </li>

         
      `;
        });
      });
  }
});

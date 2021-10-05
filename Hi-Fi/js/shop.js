document.addEventListener("DOMContentLoaded", () => {
  // Create the main category gallery
  let titleh2 = document.querySelector(".Main_shop_category__title");

  let url = window.location.search;

  let urlParam = new URLSearchParams(url);

  titleh2.innerHTML = urlParam.get("categoryName");

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

 <a href="singleProduct.html?id=${product.id}">
 <img src="images/category/${product.image}" alt=""> 
 
 <p class="CategoryImg__text">${product.name}</p>
 <p class="CategoryImg__price">${product.price}</p></a>
 

 
<div class="MainflexImgTo">
 <img src="images/cd_afspillere/${product.SingleSmall1}" alt="">
 <img class="MainflexImgTo__second" src="images/cd_afspillere/${product.SingleSmall2}.jpg"  alt="">
 </div> 

  
       
  
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

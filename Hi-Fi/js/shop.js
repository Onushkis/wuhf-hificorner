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

        var categoryName = getCategory();

        if (categoryName === "Amplifiers") {

          data.Amplifiers.forEach((category) => {

            if (category.hasButom === true) {

              shopGallery.innerHTML += `
  
   
            <div class="CategoryImg__gallery">
            
    
            <div class="CategoryImg__img">
                <img src="images/cd_afspillere/${category.image}" alt="">
            
                <p class="CategoryImg__text">yamaha R-N402 network <br> HiFI Receiver</p>
                <p class="CategoryImg__price">£429.00 £329.00</p>
            
            <div class="CategoryImg__btn">
                <button class="CategoryImg__gallery__add">Add to cart</button>
            </div>
            </div>
            </div>    
            `;


            }
            else {
              shopGallery.innerHTML += `
  
   
  <div class="CategoryImg__gallery">  
  
  <div class="CategoryImg__img">
    <img src="images/cd_afspillere/${category.image}" alt="">
  
    <p class="CategoryImg__text">yamaha R-N402 network <br> HiFI Receiver</p>
    <p class="CategoryImg__price">£429.00 £329.00</p>  
  </div> 
  </div>  
  `;
            }
          })
        }
        else if (categoryName === "Speakers") {

          data.Speakers.forEach((category) => {

            if (category.hasButom === true) {
              shopGallery.innerHTML += `
  
   
            <div class="CategoryImg__gallery">
            
    
            <div class="CategoryImg__img">
                <img src="images/hojtalere/${category.image}" alt="">
            
                <p class="CategoryImg__text">yamaha R-N402 network <br> HiFI Receiver</p>
                <p class="CategoryImg__price">£429.00 £329.00</p>
            
            <div class="CategoryImg__btn">
                <button class="CategoryImg__gallery__add">Add to cart</button>
            </div>
            </div>
            </div>    
            `;


            }
            else {
              shopGallery.innerHTML += `
  
   
  <div class="CategoryImg__gallery">  
  
  <div class="CategoryImg__img">
    <img src="images/hojtalere/${category.image}" alt="">
  
    <p class="CategoryImg__text">yamaha R-N402 network <br> HiFI Receiver</p>
    <p class="CategoryImg__price">£429.00 £329.00</p>  


  </div> 
  </div>  
  `;
            }
          })
        }

        else if (categoryName === "TurnTables") {

          data.TurnTables.forEach((category) => {

            if (category.hasButom === true) {
              shopGallery.innerHTML += `
  
   
            <div class="CategoryImg__gallery">
            
    
            <div class="CategoryImg__img">
                <img src="images/forforstaerkere/${category.image}" alt="">
            
                <p class="CategoryImg__text">yamaha R-N402 network <br> HiFI Receiver</p>
                <p class="CategoryImg__price">£429.00 £329.00</p>
            
            <div class="CategoryImg__btn">
                <button class="CategoryImg__gallery__add">Add to cart</button>
            </div>
            </div>
            </div>    
            `;


            }
            else {
              shopGallery.innerHTML += `
  
   
  <div class="CategoryImg__gallery">  
  
  <div class="CategoryImg__img">
    <img src="images/forforstaerkere/${category.image}" alt="">
  
    <p class="CategoryImg__text">yamaha R-N402 network <br> HiFI Receiver</p>
    <p class="CategoryImg__price">£429.00 £329.00</p>  


  </div> 
  </div>  
  `;
            }
          })
        }
      })
  }


  

  function getCategory() {

    var url_string = window.location.href
    var url = new URL(url_string);
    var category_name = url.searchParams.get("categoryName");
    return category_name
  }


  // Create the Div Left


  fetch("./js/divLeft.json")
    .then((response) => response.json())
    .then((data) => {

      data.Categories.forEach((category) => {

        let divLeftCategory = document.querySelector(".Main_shop_category__ul");

        console.log(category.label);

        divLeftCategory.innerHTML += `
       
     
    
          <li><a href="shop_category.html?categoryName=${category.label}">${category.label}</a>
          </li>

         
      `;
      })

    });


  


});

          // --------her finde jeg alle Arrays og skriver i innerHtml det hele

























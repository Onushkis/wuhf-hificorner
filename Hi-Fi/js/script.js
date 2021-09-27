document.addEventListener("DOMContentLoaded", () => {
  // ----------------her finde jeg Nav list

  let categoriesContainer = document.querySelector(".Main");

  fetch("./js/home.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      // ----------------her finde alle Arrays og skriver i innerHtml det hele

      data.Categories.forEach((category) => {
        // console.log(category.image);
        categoriesContainer.innerHTML += `
        
        <div class="Main__Nav__gallery">

          <div class="Main__imgShop">

            <img src="images/category/${category.image}" alt="">

          </div>

          <div class="Main__img__name">

           <a href="shop_category.html?categoryName=${category.category_name}">${category.category_name}</a>

          </div>

        </div>
        
    `;
      });
    });


});

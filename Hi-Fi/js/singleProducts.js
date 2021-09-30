document.addEventListener("DOMContentLoaded", () => {
  fetch_id();

  function fetch_id() {
    let shopGallery = document.querySelector(".flexContainer");

    fetch("./js/shop.json")
      .then((response) => response.json())
      .then((data) => {
        let id = getProductId();

        const single = data.products.find((element) => element.id == id);
        console.log(single);
        shopGallery.innerHTML += `

     
      <div class="flexContainer">
   
      <div class="MainflexImgText">
          <div class="MainflexImgText__img">
          <img src="images/cd_afspillere/creek_Destiny_CD.jpg" alt="">
      </div>
   
      <div class="MainflexImgTextt">
          <p class="MainflexText">${single.name}</p>
   
          <div class="MainflexPrice">
              <p>See others Marantaz products</p>
   
              <p><span class="MainflexPriceLine"> £469.00 </span> 429.00</p>
          </div>
   
      <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam odio similique ut,
          architecto porro voluptatum dolore. Ratione voluptas cumque ad magni, explicabo, nobis
          consectetur debitis, aliquam temporibus aperiam dolorum?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem deleniti aut libero necessitatibus doloribus consequuntur perspiciatis
          debitis, nisi qui eum quisquam laboriosam voluptatibus deserunt ea est animi sunt laborum dolor.
      </div>
   
   </div>
   
   
   
   </div>
   
   <div>
   <p class="mainText">View More</p>
   </div>
   
   <div class="MainflexImg">
   
   
   <img src="images/cd_afspillere/creek_evo_cd.jpg" alt="">
   <img src="images/cd_afspillere/creek_classic_cd.jpg" alt="">
   </div>
   </div>      
    </div>


    CategoryImg__img
   
   `;
      });
  } //closes fetchid

  function getProductId() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var product_id = url.searchParams.get("id");
    return product_id;
  }
}); //closes event listener
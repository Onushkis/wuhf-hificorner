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
          <img src="images/category/${single.image}" alt="">
          
    </div>
<div>


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

      <div class="flexContainerBTN">   
    <button class="flexContainerBTNt" >Ask Questions</button>
    <button class="flexContainerBTNt">Part exchange</button>
    <button class="flexContainerBTNt">PAy by finace</button>
    <button class="flexContainerBTNt">Seen a better preice</button> 
</div>     
<div class ="Mainflextable">

<div class ="MainflextablePtag">
    

<p> <span class="required-field">finish</p></span> 
<p> <span class="required-fieldd">required fields</p></span> 


</div>
<div class="checkbox">
<input type="checkbox" class="checkbox-round">Black</input>

</div>
<div class="checkbox">

<input type="checkbox" class="checkbox-round">Silver</input>
</div>
</div

</div>

<div class="Mainflextablee">

<div class ="Mainflextable_span">
    <span class="Mainflextable__Qty">Qty</span>
    <span class="Mainflextable__1">1</span>
    <button class="Mainflextable__addBTn">Add to cart</button>
</div>

<div class ="Mainflextable_or">

<span class="Mainflextable__Or">-OR-</span>
<img src="images/category/paypal.jpg" alt="">

<hr>

</div>


</div>  

<h2 class="Mainflextablee__lastTable">Auditional Informagtion</h2>



 <TABLE>
    <TR>
       <TD class="TABLE__td">Manufacturer</TD>
       <TD class="TABLE__tdd">Marantz</TD>
    </TR>
    <TR>
       <TD class="TABLE__td">Manufacturer Link</TD>
       <TD class="TABLE__tdd"><span>Marantz PM 6006</span></TD>
    </TR>
    <TR>
       <TD class="TABLE__td">Free Warranty</TD>
       <TD class="TABLE__tdd"> Free</TD>
    </TR>

    <TR>
        <TD class="TABLE__td">Delivery time</TD>
        <TD class="TABLE__tdd"> 1 - 5 working days</TD>
     </TR>

     <TR>
        <TD class="TABLE__td">Card Surcharges</TD>
        <TD class="TABLE__tdd"> No</TD>
     </TR>
 </TABLE>
   </div>
   
  
   </div>
   
  
   <div>
   <p class="mainText">View More</p>
   </div>
   

   <div class="MainflexImg">
   <img src="images/category/${single.SingleSmall1}" alt="">
   <img class="MainflexImgTo__second" src="images/category/${single.SingleSmall2}" alt="">
   
   </div>
   
   </div>      
   
    </div>


    
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

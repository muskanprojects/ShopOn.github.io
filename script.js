/*----------js for menu icon----------*/
let MenuItems = document.getElementById("MenuItems");
   
MenuItems.style.maxHeight = "0px";
   
   function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
      {
         MenuItems.style.maxHeight = "300px";
      }
      else{
         MenuItems.style.maxHeight = "0px";
      }
   }

   /*----------js for product img----------*/
   let productImg = document.getElementById("productImg");
   let smallImg = document.getElementsByClassName("small-img");

   smallImg[0].onclick = () =>
   {
    productImg.src =smallImg[0].src;
   }
   smallImg[1].onclick = () =>
   {
    productImg.src =smallImg[1].src;
   }
   smallImg[2].onclick = () =>
   {
    productImg.src =smallImg[2].src;
   }
   smallImg[3].onclick = () =>
   {
    productImg.src =smallImg[3].src;
   }

  
/*----------js for menu icon----------*/
let MenuItems = document.getElementById("MenuItems");
   
   function menutoggle(){
    MenuItems.classList.toggle('show-menu');
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

  
// ========================J-Querry Code===============================

$tbtn = $(".tbtn");
$nav = $(".navbar");
$closebtn = $(".closebtn")

$(document).ready(function(){
   $(".tbtn").click(function(){
        $(".navbar").addClass("navigate")
    })
    $(".closebtn").click(function(){
        $(".navbar").removeClass("navigate")
    })
})
// ===========================Js-Code===================================
// Some functions to add css in javascript
// (1) add() ==> add value (class) on webpage
// (2) remove ==> remove value(class) from webpage
// (3) toggle() ==> perform add and remove (class) from webpage
// (4) contains ()==> check value (css class) exist or not

// Property
//     (1) classlist ==> use to add or remove class from webpage



// let tbtn = document.querySelector(".tbtn");
// let nav = document.querySelector(".navbar");
// let closebtn = document.querySelector(".closebtn");



// tbtn.addEventListener("click", function(){
//     nav.classList.add("navigate");
// })

// closebtn.addEventListener("click", function(){
//     nav.classList.remove("navigate");
// })

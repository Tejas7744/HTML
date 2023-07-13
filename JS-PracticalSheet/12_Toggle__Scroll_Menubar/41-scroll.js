$(document).ready(function () {
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if($current > 0){
            $("header").addClass("header-fixed");
        }else{
            $("header").removeClass("header-fixed");

        }
    })
})


// window.addEventListener("scroll", function () {
//     let header = document.querySelector("header");
//     let current = window.scrollY;

//     if (current > 0) {
//         header.classList.add("header-fixed");
//     } else {
//         header.classList.remove("header-fixed");
//     }
// })
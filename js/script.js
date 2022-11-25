let images = document.querySelectorAll('.header_slider img')
let menu = document.querySelector('.burger_icon')
let burger_menu = document.querySelector('.burger_menu')
let word = document.querySelector('.header_slider h4')
let img1 = document.querySelector('.img1')
let menu_1 = document.querySelectorAll('#menu_1')
let menu_title = document.querySelectorAll('.menu_title')


// HEADER_SLIDER_START
let i = 1;
images[i].style.opacity = "1"
setInterval(function(){
    images[i].style.opacity = "0"
    i++
    if(i >= images.length){
        i = 0;
    }
    images[i].style.opacity = "1"
},3000)

window.addEventListener('load', function(e){
    word.style.left = '29%'
})
// HEADER_SLIGER_FINISH




// BURGER_MENU_START
menu.addEventListener('click', function(){
    burger_menu.style.right = '0px'
})
burger_menu.addEventListener('click', function(){
    burger_menu.style.right = '-325px'
})
// BURGER_MENU_FINISH


// SCROLL START
$(function () {
    $(window).scroll(function () {
        let $scroll = $(this).scrollTop()
        if($scroll > 300){
            $('.scroll').fadeIn()
        }
        else{
            $('.scroll').fadeOut()
        }
    })
    $('.scroll').click(function () {  
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
});
// SCROLL_FINISH


// MENU_START
// console.log(menu_1.length)
// function event_menu(){
//     p = 0; p <= menu_title.length; p++
//     return (event_menu)
// }

for(j = 1; j < menu_1.length; j++){
    menu_1[2].addEventListener('click', function (){
        menu_title[2].style.display = 'block'
    })
    menu_1[3].addEventListener('click', function (){
        menu_title[3].style.display = 'block'
    })
    menu_1[4].addEventListener('click', function (){
        menu_title[4].style.display = 'block'
    })
    menu_1[5].addEventListener('click', function (){
        menu_title[5].style.display = 'block'
    })
    menu_1[6].addEventListener('click', function (){
        menu_title[6].style.display = 'block'
    })
    menu_1[7].addEventListener('click', function (){
        menu_title[7].style.display = 'block'
    })
    menu_1[8].addEventListener('click', function (){
        menu_title[8].style.display = 'block'
    })
}
// MENU_FINISH

// SLIDER_SECTION_START
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000,
        // autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            400:{
                items: 3,
                nav: true
            },
            800:{
                items: 4,
                nav: true
            },
            1200:{
                items: 6,
                nav: true
            }

        }
    })
});
// SLIDER_SECTION_FINISH
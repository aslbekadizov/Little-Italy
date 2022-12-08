let images = document.querySelectorAll('.header_slider img')
let menu = document.querySelector('.burger_icon')
let burger_menu = document.querySelector('.burger_menu')
let word = document.querySelector('.header_slider h4')
let img1 = document.querySelector('.img1')
let menu_1 = document.querySelectorAll('.menu')
let menu_title = document.querySelectorAll('.menu_title')
let dish_menu = document.querySelectorAll('.dish_p')
let dish_title = document.querySelectorAll('.dish_title')


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
for(let u = 0; u < 8; u++){
    menu_1[u].addEventListener('click', function(){
        menu_1[0].style.border = 'none'
        menu_1[1].style.border = 'none'
        menu_1[2].style.border = 'none'
        menu_1[3].style.border = 'none'
        menu_1[4].style.border = 'none'
        menu_1[5].style.border = 'none'
        menu_1[6].style.border = 'none'
        menu_1[7].style.border = 'none'
        menu_1[u].style.border = '2px solid #fff'
        menu_1[u].style.borderRight = 'none'
        
        // Border 
        console.log(menu_title[u])
        menu_title[0].style.display = 'none'
        menu_title[1].style.display = 'none'
        menu_title[2].style.display = 'none'
        menu_title[3].style.display = 'none'
        menu_title[4].style.display = 'none'
        menu_title[5].style.display = 'none'
        menu_title[6].style.display = 'none'
        menu_title[7].style.display = 'none'
        menu_title[u].style.display = 'block'
        
    })
}
// MENU_FINISH


// MENU2_START
for(let h = 0; h < 5; h++){
    dish_menu[h].addEventListener('click', function () {
        dish_menu[0].style.border = 'none'
        dish_menu[1].style.border = 'none'
        dish_menu[2].style.border = 'none'
        dish_menu[3].style.border = 'none'
        dish_menu[4].style.border = 'none'
        dish_menu[h].style.border = '1px solid #69e3f3'
        dish_menu[h].style.borderRight = 'none'
        // BORDER
        dish_title[0].style.display = 'none'
        dish_title[1].style.display = 'none'
        dish_title[2].style.display = 'none'
        dish_title[3].style.display = 'none'
        dish_title[4].style.display = 'none'
        dish_title[h].style.display = 'block'
    })
}
// MENU2_FINISH

// SLIDER_SECTION_START
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        responsive: {
            0:{
                items: 1,
            },
            400:{
                items: 2,
            },
            800:{
                items: 2,
            },
            1200:{
                items: 3,
            }
        }
    })
});
// SLIDER_SECTION_FINISH
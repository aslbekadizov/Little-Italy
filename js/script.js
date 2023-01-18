let images = document.querySelectorAll('.header_slider img')
let menu = document.querySelector('.burger_icon')
let burger_menu = document.querySelector('.burger_menu')
let word = document.querySelector('.header_slider h4')
let img1 = document.querySelector('.img1')
let menu_1 = document.querySelectorAll('.menu p')
let menu_title = document.querySelectorAll('.menu_title')
let dish_menu = document.querySelectorAll('.dish_p p')
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
    document.querySelector('body').style = `overflow:hidden;`
})
burger_menu.addEventListener('click', function(){
    burger_menu.style.right = '-325px'
    document.querySelector('body').style = `overflow:none;`
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
menu_1.forEach((item, index) => {
    item.addEventListener('click', () => {
        menu_1.forEach(item => {
            item.classList.remove('active')
        })
        
        item.classList.add('active')
        menu_title.forEach(item => {
            item.style = `display: none;`
        });
        menu_title[index].style = `display: block;`
    })
});
// MENU_FINISH


// MENU2_START
dish_menu.forEach((item, index) => {
    item.addEventListener('click', () => {
        dish_menu.forEach(item => {
            item.classList.remove('active2')
        })
        
        item.classList.add('active2')
        dish_title.forEach(item => {
            item.style = `display: none;`
        });
        dish_title[index].style = `display: block;`
    })
});
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
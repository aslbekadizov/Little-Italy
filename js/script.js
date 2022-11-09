let images = document.querySelectorAll('.header_slider img')
let menu = document.querySelector('.burger_icon')
let burger_menu = document.querySelector('.burger_menu')
let word = document.querySelector('.header_slider h4')
let img1 = document.querySelector('.img1')



// HEADER_SLIDER_START
var i = 1;
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
        console.log($scroll)
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
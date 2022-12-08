let images = document.querySelectorAll('.header_slider img')
let menu = document.querySelector('.burger_icon')
let burger_menu = document.querySelector('.burger_menu')
let word = document.querySelector('.header_slider h4')
let img1 = document.querySelector('.img1')
let menu_1 = document.querySelectorAll('.menu')
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

// SLIDER_SECTION_START

// SLIDER_SECTION_FINISH
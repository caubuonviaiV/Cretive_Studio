
$(document).ready(function(){
    // navigation toggling
    $('#nav-icon').click(function(){
        $('.nav-menu').slideToggle();
        
        // icon change
        if($('#nav-icon i').attr('class') === 'fas fa-bars'){
            $('#nav-icon i').removeClass('fas fa-bars');
            $('#nav-icon i').addClass('fas fa-times');
        } else {
            $('#nav-icon i').removeClass('fas fa-times');
            $('#nav-icon i').addClass('fas fa-bars');
        }
    });






// Fixed Nav
const nav = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("fix-nav");
  } else {
    nav.classList.remove("fix-nav");
  }
});

// loader padding
$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});


    // AOS Instance
    AOS.init();
    // year
    $('.date').text((new Date).getFullYear());
});
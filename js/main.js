
let scrollStyle = new ScrollStyle();
let slider = new Slider();
let sidebar = new Sidebar();

//Loading
$(document).ready(function(){
    $('#loading').fadeOut(2000)

    $('.owl-carousel').owlCarousel({
        loop: true,
        responsive:{
            0:{
                items: 1
            },
            991: {
                items: 2
            }
        }
       
    });
    $('.proto-container').isotope({
        itemSelector: '.slider-item',
        layoutMode: 'masonry'
      });
      $('#portfolio-nav li').click(function(){
        let selctore = $(this).attr('data-filter')
        $('.proto-container').isotope({
            filter: selctore,
          });
          return false;
      })
    
})

let lastScrollTop = 0;
$(window).scroll(function(e){
    scrollStyle.chNavBg()
    scrollStyle.hideNavbarTop()
    scrollStyle.changeActiveWhenDown()
    scrollStyle.btnUpToggle()
})
scrollStyle.btnUpClicked()
switchNavActiveLink()
counter()
slider.switchActiveLinke();
slider.openModule();
sidebar.toggleSidebar()
sidebar.pickColor()
// Typed Object
let typed = new Typed("#typing", 
    {
    strings: ["Simone Olivia", "Web Developer", "Graphic Design", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    }
)


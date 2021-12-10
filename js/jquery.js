const SLIDE_LEFT = "animate__animated animate__slideInLeft";
const FADE_IN = "animate__animated animate__fadeIn";
const FADE_OUT = "animate__animated animate__fadeOut"
$(window).on('load',()=>{
    $('#loading').hide();
})

$(window).on('scroll',()=>{
    const scrollTop = $(window).scrollTop();
    if(scrollTop>500){
        $('#projects').addClass(SLIDE_LEFT)
        $('.card-animated').addClass(SLIDE_LEFT)
    }
    if(scrollTop<400){
        $('#projects').removeClass(SLIDE_LEFT)
        $('.card-animated').removeClass(SLIDE_LEFT)
    }
    if(scrollTop>3988){
        $('.reason-card-container').removeClass(FADE_OUT)
        $('.reason-card-container').addClass(FADE_IN)
    }
    if(scrollTop<3890){
        $('.reason-card-container').removeClass(FADE_IN)
        $('.reason-card-container').addClass(FADE_OUT)
    }
    if(scrollTop>1700){
        $('#skills').addClass(SLIDE_LEFT)
        $('.card-animated-skill').addClass(SLIDE_LEFT)
    }
    if(scrollTop<1600){
        $('#skills').removeClass(SLIDE_LEFT)
        $('.card-animated-skill').removeClass(SLIDE_LEFT)
    }
    if(scrollTop>3517){
        $('#reasons').addClass(SLIDE_LEFT)
    }
    if(scrollTop<3510){
        $('#reasons').removeClass(SLIDE_LEFT)
    }
})
$('#navbar-menu ul li a').on('click',()=>{
    if(window.innerWidth < 961)
        $('#navbar-menu').fadeOut(1000)
})


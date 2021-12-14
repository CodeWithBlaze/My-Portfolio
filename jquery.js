const SLIDE_LEFT = "animate__animated animate__slideInLeft";
const FADE_IN = "animate__animated animate__fadeIn";
const FADE_OUT = "animate__animated animate__fadeOut"

function removeActive(){
    const links = document.getElementsByClassName('navbar-links');
    for(let i =0;i<links.length;i++){
        links[i].classList.remove('active');
    }
}
function setActive(scrollTop){
    removeActive()
    let id='';
    if(scrollTop < 500)
        id='about-link';
    else if(scrollTop < 1700)
        id='project-link';
    else if(scrollTop < 3517)
        id='skill-link';
    else
        id='reason-link';
    document.getElementById(id).classList.add('active');
}
$(window).on('load',()=>{
    $('#loading').hide();
})

$(window).on('scroll',()=>{
    const scrollTop = $(window).scrollTop();
    
    if(scrollTop>500){
        setActive(scrollTop)
        $('#projects').addClass(SLIDE_LEFT)
        $('.card-animated').addClass(SLIDE_LEFT)
    }
    if(scrollTop<400){
        setActive(scrollTop)
        $('#projects').removeClass(SLIDE_LEFT)
        $('.card-animated').removeClass(SLIDE_LEFT)
    }
    if(scrollTop>3900){
        $('.workflow-container').removeClass(FADE_OUT)
        $('.workflow-container').addClass(FADE_IN)
    }
    if(scrollTop<3890){
        $('.workflow-container').removeClass(FADE_IN)
        $('.workflow-container').addClass(FADE_OUT)
    }
    if(scrollTop>5333){
        $('.reason-card-container').removeClass(FADE_OUT)
        $('.reason-card-container').addClass(FADE_IN)
    }
    if(scrollTop<3890){
        $('.reason-card-container').removeClass(FADE_IN)
        $('.reason-card-container').addClass(FADE_OUT)
    }
    if(scrollTop>1700){
        setActive(scrollTop)
        $('#skills').addClass(SLIDE_LEFT)
        $('.card-animated-skill').addClass(SLIDE_LEFT)
    }
    if(scrollTop<1600){
        setActive(scrollTop)
        $('#skills').removeClass(SLIDE_LEFT)
        $('.card-animated-skill').removeClass(SLIDE_LEFT)
    }
    if(scrollTop>3517){
        setActive(scrollTop)
        $('#reasons').addClass(SLIDE_LEFT)
    }
    if(scrollTop<3510){
        setActive(scrollTop)
        $('#reasons').removeClass(SLIDE_LEFT)
    }
})
$('#navbar-menu ul li a').on('click',()=>{
    if(window.innerWidth < 961){
        $.when($('#navbar-menu').fadeOut(1000)).then(()=>{
            document.getElementById('navbar-menu').classList.remove('navbar-in')
        })
        
        
    }
        
})


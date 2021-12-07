$(window).on('load',()=>{
    $('#loading').hide();
})

$(window).on('scroll',()=>{
    console.log($(window).scrollTop())
    if($(window).scrollTop()>500){
        $('#projects').addClass('animate__animated animate__slideInLeft')
        $('.card-animated').addClass('animate__animated animate__slideInLeft')
    }
    if($(window).scrollTop()<400){
        $('#projects').removeClass('animate__animated animate__slideInLeft')
        $('.card').removeClass('animate__animated animate__slideInLeft')
    }
    if($(window).scrollTop()>3988){
        $('.reason-card-container').removeClass('animate__animated animate__fadeOut')
        $('.reason-card-container').addClass('animate__animated animate__fadeIn')
    }
    if($(window).scrollTop()<3900){
        $('.reason-card-container').removeClass('animate__animated animate__fadeIn')
        $('.reason-card-container').addClass('animate__animated animate__fadeOut')
    }
})
$('.nav-link').on('click',()=>{
    $('#navbar-menu').fadeOut(1000)
})
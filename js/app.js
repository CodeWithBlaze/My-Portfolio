function toggleNavbar(){
    const list = document.getElementById('navbar-menu').classList;
    if(list.contains('navbar-in')){
        list.remove('navbar-in')
        list.add('navbar-out')
    }
    else{
        document.getElementById('navbar-menu').style.display='block';
        list.remove('navbar-out')
        list.add('navbar-in')
    }
        
}
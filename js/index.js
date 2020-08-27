document.getElementById('hider').onclick = function() {
    makeMenu();
}

document.getElementById('hider2').onclick = function() {
    makeMenu();
}

function makeMenu(){
    let menu = document.getElementById('mobile-menu');
    let body = document.getElementById('main');

    if(menu.style.display === 'initial') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'initial';
    }
}
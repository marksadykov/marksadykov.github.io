document.getElementById('hider').onclick = function() {
    let el = document.getElementById('config-btn');
    let el2 = document.getElementById('hider');
    let el3 = document.getElementById('content');
    let el4 = document.getElementById('main');
    let el5 = document.getElementById('page');
    let el6 = document.getElementById('hider2');
    let el7 = document.getElementById('upline-left');
    let el8 = document.getElementById('upline-right');
    let el9 = document.getElementById('downline-left-menu');

    if(el.style.display === 'initial') {
        el.style.display = 'none';
        el2.style.display = 'initial';
        el3.style.cssText = `margin-top: 30px;`;
        el4.style.cssText = `padding-left: 15px;`;
        el5.style.cssText = `padding-top: 20px;`;
        el6.style.display = 'none';
        el7.style.display = 'initial';
        el8.style.display = 'initial';

        el9.style.display = 'none';

    }
    else {
        el.style.display = 'initial';
        el2.style.cssText = `color: #000000;`;
        el2.style.display = 'none';
        el3.style.cssText = `margin-top: 0px;`;
        el4.style.cssText = `padding-left: 0px;`;
        el5.style.cssText = `padding-top: 0px;`;
        el6.style.display = 'initial';
        el7.style.display = 'none';
        el8.style.display = 'none';

        el9.style.display = 'initial';
    }
}

document.getElementById('hider2').onclick = function() {
    let el = document.getElementById('config-btn');
    let el2 = document.getElementById('hider');
    let el3 = document.getElementById('content');
    let el4 = document.getElementById('main');
    let el5 = document.getElementById('page');
    let el6 = document.getElementById('hider2');
    let el7 = document.getElementById('upline-left');
    let el8 = document.getElementById('upline-right');
    let el9 = document.getElementById('downline-left-menu');

    if(el.style.display === 'initial') {
        el.style.display = 'none';
        el2.style.display = 'initial';
        el3.style.cssText = `margin-top: 30px;`;
        el4.style.cssText = `padding-left: 15px;`;
        el5.style.cssText = `padding-top: 20px;`;
        el6.style.display = 'none';
        el7.style.display = 'initial';
        el8.style.display = 'initial';

        el9.style.display = 'none';

    }
    else {
        el.style.display = 'initial';
        el2.style.cssText = `color: #000000;`;
        el2.style.display = 'none';
        el3.style.cssText = `margin-top: 0px;`;
        el4.style.cssText = `padding-left: 0px;`;
        el5.style.cssText = `padding-top: 0px;`;
        el6.style.display = 'initial';
        el7.style.display = 'none';
        el8.style.display = 'none';

        el9.style.display = 'initial';
    }
}
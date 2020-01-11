function hamburgerOpen() {
    let element = document.getElementById("myDIV");

    if (element.classList == 'burger burger-rotate close') {
        element.classList.add('open')
        element.classList.remove('close')
        document.getElementById("myNav").style.width = "100%";
    } else {
        element.classList.remove('open')
        element.classList.add('close')
        document.getElementById("myNav").style.width = "0%";
    }
}

function noScroll() {
    $('body').on('click', '.burger', (e) => {
        e.preventDefault();
        $('body').toggleClass('noScroll');
    })
}

function fadeIn() {
    $('body').on('click', '.close', (e) => {
        e.preventDefault();
        $('.overlay-content').animate({opacity: '0'}, 50);
    })
}

function fadeOut() {
    $('body').on('click', '.open', (e) => {
        e.preventDefault();
        $('.overlay-content').animate({opacity: '1'}, 1200);
    })
}

function runPortfolio() {
    fadeIn();
    fadeOut();
    noScroll();
}

$(runPortfolio);
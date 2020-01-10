function hamburgerOpen() {
    let element = document.getElementById("myDIV");

    if (element.classList == 'burger burger-rotate') {
        element.classList.add('open')
        document.getElementById("myNav").style.width = "100%";
    } else {
        element.classList.remove('open')
        document.getElementById("myNav").style.width = "0%";
    }
}

function noScroll() {
    $('body').on('click', '.burger', (e) => {
        e.preventDefault();
        $('body').toggleClass('noScroll');
    })
}

// fix, does not fade content
function fadeMenu() {
    $('body').on('click', '.burger', (e) => {
        e.preventDefault();
        console.log('working');
        $('.overlay-content').fadeIn('slow');
    })
}

function runPortfolio() {
    fadeMenu();
    noScroll();
}

$(runPortfolio);
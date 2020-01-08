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

function runPortfolio() {
    noScroll();
}

$(runPortfolio);
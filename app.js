window.addEventListener('load', ()=> {
    setTimeout(()=> {
        const preload = document.querySelector('.preload');
        preload.classList.add('preload-finish');
    }, 1000);
});

function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
};

window.addEventListener('scroll', () => {
    parallax('header', window.scrollY, 1);
    parallax('.title', window.scrollY, 0.8);
});

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
let ul = document.querySelector('.nav-right ul');
let a = document.querySelectorAll('.nav-right ul li a');
let hamburger = document.querySelector('.ham');
let sidenav = document.querySelector('.nav-right');

a.forEach(el => {
    el.addEventListener('click', function () {
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active')
    })
})


// hamburger click function

hamburger.onclick = function () {
    hamburger.classList.toggle('active');
    sidenav.classList.toggle('active')
}

document.onclick = function (e) {
    if (e.target.id !== 'sidenav' && e.target.id !== 'hamburger') {
        hamburger.classList.remove('active');
        sidenav.classList.remove('active')
    }
}

// owl carousel js

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1
        }
    }
})
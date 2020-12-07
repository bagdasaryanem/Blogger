const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

// Validating email input
    const emailRegExp = /^\W+|\w+@\w{2,10}.\w{2,5}$/;
    const emailSubscribe = document.getElementById('emailSubscribe');
    const requiredEmail = document.getElementById('requiredEmail');
    const wrongEmail = document.getElementById('wrongEmail');

    emailSubscribe.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = e.target[0].value;
        if (!emailValue) {
            wrongEmail.style.display = "none";
            requiredEmail.style.display = "block";
        } else {
            if (!emailRegExp.test(emailValue)) {
                requiredEmail.style.display = "none";
                wrongEmail.style.display = "block";
            }else{
                wrongEmail.style.display = "none";
                requiredEmail.style.display = "none";
                console.log("Email: ", e.target[0].value )
            }
        }

    })
});
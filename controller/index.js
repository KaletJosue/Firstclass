var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    rest: true
})

sr.reveal('.container', { delay: 100, origin: 'top' });

var login = document.getElementById("login")

login.addEventListener('click', () => {
    location.href = "../firstclass/views/login.html"
})
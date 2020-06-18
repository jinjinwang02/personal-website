//INFO FADE IN
const faders = document.querySelectorAll(".fade-in-and-rise");
const appearOptions = {
    thresohld: 1
}
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

//INFO SPLIT SCREEN
function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: 400,
        triggerElement: ".info__heading",
        triggerHook: 0,
    }).setPin(".info__heading")
        // .addIndicators()
        .addTo(controller);
}
splitScroll();
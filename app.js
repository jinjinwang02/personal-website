// NAV AND CURSOR ANIMATION
(function () {
    const navLink = document.querySelectorAll(".nav__item");
    const cursor = document.querySelector(".nav__cursor");

    const animate = function (e) {
        const span = this.querySelector("span");
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    navLink.forEach(b => b.addEventListener("mousemove", animate));
    navLink.forEach(b => b.addEventListener("mouseleave", animate));
    window.addEventListener("mousemove", editCursor);
})();

//CONTACT LINKS ANIMATION
const linkAnime = (linkIndex) => {
    anime({
        targets: `.hoverIn-${linkIndex}> .char`,
        translateY: [12, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutQuint",
        duration: 100,
        delay: (el, i) => 100 + 15 * i
    });
};

const addAnimeToHomeLinks = (index, func, linkIndex) => {
    document.querySelectorAll(".home__contactLinks-item")[index].addEventListener("mouseenter", () => { func(linkIndex) });
};
addAnimeToHomeLinks(0, linkAnime, 1);
addAnimeToHomeLinks(1, linkAnime, 2);
addAnimeToHomeLinks(2, linkAnime, 3);
addAnimeToHomeLinks(3, linkAnime, 4);

const addAnimeToFooterLinks = (index, func, linkIndex) => {
    document.querySelectorAll(".footer__contactLinks-item")[index].addEventListener("mouseenter", () => { func(linkIndex) });
}
addAnimeToFooterLinks(0, linkAnime, 1);
addAnimeToFooterLinks(1, linkAnime, 2);
addAnimeToFooterLinks(2, linkAnime, 3);
addAnimeToFooterLinks(3, linkAnime, 4);

// HOME PARALLAX
function parallaxHome(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", () => {
    parallaxHome(".home", window.scrollY, 0.3);

    const line = document.querySelector(".home__line-rt");
    const cube = document.querySelector(".home__cube");
    let newOpacity = 1 - ((window.scrollY || window.pageYOffset) * 2.5 / 1000);
    cube.style.opacity = `${newOpacity}`;
    line.style.opacity = `${newOpacity}`;
});

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) { startTime = currentTime; }
        let timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) { requestAnimationFrame(animation); }
    }

    function ease(t, b, c, d) {
        return c * t / d + b;
    };
    requestAnimationFrame(animation);
}

const homeTag = document.getElementById('homeTag');
homeTag.addEventListener('click', () => {
    smoothScroll(".home", 300);
});

// HOME TWEENMAX
TweenMax.from(".home__heading-1", 2, {
    x: 30,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".home__heading-2", 2, {
    x: -30,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".home__heading-3", 2, {
    x: -30,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".home__circle", 2, {
    delay: 1.2,
    x: -20,
    opacity: 0,
    ease: Expo.easeInOut
});

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

// PROJECTS ROTAING CIRCLE AND HEADING
const circle = document.querySelector(".projects__circle");
const circleTrail = document.querySelector(".projects__circle-trail");
const projectsHeading = document.querySelector(".projects__heading");

window.addEventListener("scroll", () => {
    let offset = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    offset = offset * 0.4;

    circle.style.setProperty("-moz-transform", "translate(-50%, -50%) rotate(" + offset + "deg)");
    circle.style.setProperty("-webkit-transform", "translate(-50%, -50%) rotate(" + offset + "deg)");
    circle.style.setProperty("-o-transform", "translate(-50%, -50%) rotate(" + offset + "deg)");
    circle.style.setProperty("-ms-transform", "translate(-50%, -50%) rotate(" + offset + "deg)");
    circle.style.setProperty("transform", "translate(-50%, -50%) rotate(" + offset + "deg)");

    circleTrail.style.setProperty("-moz-transform", "translate(-50%, -50%) rotate(" + offset + "deg)");
    circleTrail.style.setProperty("-webkit-transform", "translate(-50%, -50%) rotate(" + offset + "deg)");
    circleTrail.style.setProperty("-o-transform", "translate(-50%, -50%) rotate(" + offset + "deg)");
    circleTrail.style.setProperty("-ms-transform", "translate(-50%, -50%) rotate(" + offset + "deg)");
    circleTrail.style.setProperty("transform", "translate(-50%, -50%) rotate(" + offset + "deg)");


    let newPosition = 1450 - (window.scrollY || window.pageYOffset) / 1.1;
    projectsHeading.style.transform = `translateX(${newPosition}px)`;
});

// PROJECT IMAGES
const projectsCursor = document.querySelector(".projects__cursor");
const projectsOverlay = document.querySelectorAll(".projects__overlay");

function moveCircle(e) {
    TweenLite.to(projectsCursor, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY
        },
        delay: 0.03
    });
}

const clearImg = () => { projectsCursor.style.setProperty("background-image", "none") };
const setImgSize = (width, height) => {
    projectsCursor.style.setProperty("width", `${width}rem`);
    projectsCursor.style.setProperty("height", `${height}rem`);
};

const changeImages = (total, index) => {
    let i = 1;
    myInterval = setInterval(() => {
        if (i < total) {
            projectsCursor.style.setProperty("background-image", `url(public/images/project-${index}-${i}.jpg)`);
            i++;
        } else { i = 1; }
    }, 300);
};

document.querySelector(".projects__1").addEventListener("mouseenter", () => {
    setImgSize(50, 30);
    changeImages(6, 1);
});

document.querySelector(".projects__2").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("background-image", "url(public/images/project-2-1.jpg)");
    setImgSize(53, 30);
});

document.querySelector(".projects__3").addEventListener("mouseenter", () => {
    setImgSize(54, 30);
    changeImages(5, 3);
});

document.querySelector(".projects__4").addEventListener("mouseenter", () => {
    setImgSize(54, 30);
    changeImages(5, 4);
});

document.querySelector(".projects__6").addEventListener("mouseenter", () => {
    setImgSize(55, 34);
    changeImages(7, 6);
});

document.querySelector(".projects__7").addEventListener("mouseenter", () => {
    setImgSize(35, 50);
    changeImages(5, 7);
});

document.querySelector(".projects__8").addEventListener("mouseenter", () => {
    setImgSize(53, 40);
    changeImages(7, 8);
});

document.querySelectorAll(".projects__project-container").forEach(b => b.addEventListener("mouseleave", () => {
    clearImg();
    clearInterval(myInterval);
}));

projectsOverlay.forEach(b => b.addEventListener("mousemove", () => {
    TweenLite.to(projectsCursor, 0.3, { scale: 1, autoAlpha: 1 });
    projectsOverlay.forEach(b => b.addEventListener("mousemove", moveCircle))
}));

projectsOverlay.forEach(b => b.addEventListener("mouseout", () => {
    TweenLite.to(projectsCursor, 0.3, { scale: 0.5, autoAlpha: 0 });
}));
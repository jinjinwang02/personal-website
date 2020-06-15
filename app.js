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

//CONTACT LINKS
const anim1 = () => {
    anime({
        targets: ".hoverIn-1 > .char",
        translateY: [12, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeInOutCubic",
        duration: 100,
        delay: (el, i) => 100 + 15 * i
    });
}
const anim2 = () => {
    anime({
        targets: ".hoverIn-2 > .char",
        translateY: [12, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeInOutCubic",
        duration: 100,
        delay: (el, i) => 100 + 15 * i
    });
}
const anim3 = () => {
    anime({
        targets: ".hoverIn-3 > .char",
        translateY: [12, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeInOutCubic",
        duration: 100,
        delay: (el, i) => 100 + 15 * i
    });
}
const anim4 = () => {
    anime({
        targets: ".hoverIn-4 > .char",
        translateY: [12, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeInOutCubic",
        duration: 100,
        delay: (el, i) => 100 + 15 * i
    });
}

document.querySelectorAll(".home__contactLinks-item")[0].addEventListener("mouseenter", anim1);
document.querySelectorAll(".home__contactLinks-item")[1].addEventListener("mouseenter", anim2);
document.querySelectorAll(".home__contactLinks-item")[2].addEventListener("mouseenter", anim3);
document.querySelectorAll(".home__contactLinks-item")[3].addEventListener("mouseenter", anim4);
document.querySelectorAll(".footer__contactLinks-item")[0].addEventListener("mouseenter", anim1);
document.querySelectorAll(".footer__contactLinks-item")[1].addEventListener("mouseenter", anim2);
document.querySelectorAll(".footer__contactLinks-item")[2].addEventListener("mouseenter", anim3);
document.querySelectorAll(".footer__contactLinks-item")[3].addEventListener("mouseenter", anim4);

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

//p1
document.querySelector(".projects__1").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("width", "50rem");
    projectsCursor.style.setProperty("height", "30rem");
    let i = 1;
    function changeImg() {
        if (i < 6) {
            projectsCursor.style.setProperty("background-image", `url(public/images/project-1-${i}.jpg)`);
            i++;
        } else { i = 1; }
    }
    interval1 = setInterval(changeImg, 300);
});
document.querySelector(".projects__1").addEventListener("mouseleave", () => {
    projectsCursor.style.setProperty("background-image", "none");
    clearInterval(interval1);
});

//p2
document.querySelector(".projects__2").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("background-image", "url(public/images/project-2-1.jpg)");
    projectsCursor.style.setProperty("width", "54rem");
    projectsCursor.style.setProperty("height", "30rem");
});
document.querySelector(".projects__2").addEventListener("mouseleave", () => {
    projectsCursor.style.setProperty("background-image", "none");
});
//p3
document.querySelector(".projects__3").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("width", "54rem");
    projectsCursor.style.setProperty("height", "30rem");

    let i = 1;
    function changeImg() {
        if (i < 5) {
            projectsCursor.style.setProperty("background-image", `url(public/images/project-3-${i}.jpg)`);
            i++;
        } else { i = 1; }
    }
    interval3 = setInterval(changeImg, 300);
});
document.querySelector(".projects__3").addEventListener("mouseleave", () => {
    projectsCursor.style.setProperty("background-image", "none");
    clearInterval(interval3);
});
//p4
document.querySelector(".projects__4").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("width", "54rem");
    projectsCursor.style.setProperty("height", "30rem");

    let i = 1;
    function changeImg() {
        if (i < 5) {
            projectsCursor.style.setProperty("background-image", `url(public/images/project-4-${i}.jpg)`);
            i++;
        } else { i = 1; }
    }
    interval4 = setInterval(changeImg, 300);
});
document.querySelector(".projects__4").addEventListener("mouseleave", () => {
    projectsCursor.style.setProperty("background-image", "none");
    clearInterval(interval4);
});
//p5
document.querySelector(".projects__5").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("background-image", "none");
});
//p6
document.querySelector(".projects__6").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("width", "55rem");
    projectsCursor.style.setProperty("height", "34rem");

    let i = 1;
    function changeImg() {
        if (i < 7) {
            projectsCursor.style.setProperty("background-image", `url(public/images/project-6-${i}.jpg)`);
            i++;
        } else { i = 1; }
    }
    interval6 = setInterval(changeImg, 300);
});
document.querySelector(".projects__6").addEventListener("mouseleave", () => {
    projectsCursor.style.setProperty("background-image", "none");
    clearInterval(interval6);
});
//p7
document.querySelector(".projects__7").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("width", "35rem");
    projectsCursor.style.setProperty("height", "50rem");

    let i = 1;
    function changeImg() {
        if (i < 5) {
            projectsCursor.style.setProperty("background-image", `url(public/images/project-7-${i}.jpg)`);
            i++;
        } else { i = 1; }
    }
    interval7 = setInterval(changeImg, 300);
});
document.querySelector(".projects__7").addEventListener("mouseleave", () => {
    projectsCursor.style.setProperty("background-image", "none");
    clearInterval(interval7);
});
//p8
document.querySelector(".projects__8").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("width", "53rem");
    projectsCursor.style.setProperty("height", "40rem");

    let i = 1;
    function changeImg() {
        if (i < 7) {
            projectsCursor.style.setProperty("background-image", `url(public/images/project-8-${i}.jpg)`);
            i++;
        } else { i = 1; }
    }
    interval8 = setInterval(changeImg, 300);
});

document.querySelector(".projects__8").addEventListener("mouseleave", () => {
    projectsCursor.style.setProperty("background-image", "none");
    clearInterval(interval8);
});

projectsOverlay.forEach(b => b.addEventListener("mousemove", () => {
    TweenLite.to(projectsCursor, 0.3, { scale: 1, autoAlpha: 1 });
    projectsOverlay.forEach(b => b.addEventListener("mousemove", moveCircle))
}));

projectsOverlay.forEach(b => b.addEventListener("mouseout", () => {
    TweenLite.to(projectsCursor, 0.3, { scale: 0.5, autoAlpha: 0 });
}));
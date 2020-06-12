// NAV AND CURSOR ANIMATION ///////////////////////////////////
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

//CONTACT LINKS ///////////////////////////////////
const anim1 = () => {
    anime({
        targets: ".hoverIn-1 > .char",
        translateY: [10, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeInOutCubic",
        duration: 200,
        delay: (el, i) => 100 + 10 * i
    });
}
const anim2 = () => {
    anime({
        targets: ".hoverIn-2 > .char",
        translateY: [10, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeInOutCubic",
        duration: 250,
        delay: (el, i) => 100 + 10 * i
    });
}
const anim3 = () => {
    anime({
        targets: ".hoverIn-3 > .char",
        translateY: [10, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeInOutCubic",
        duration: 200,
        delay: (el, i) => 100 + 10 * i
    });
}
const anim4 = () => {
    anime({
        targets: ".hoverIn-4 > .char",
        translateY: [10, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeInOutCubic",
        duration: 200,
        delay: (el, i) => 100 + 10 * i
    });
}

const homeContactLink1 = document.querySelectorAll(".home__contactLinks-item")[0];
const homeContactLink2 = document.querySelectorAll(".home__contactLinks-item")[1];
const homeContactLink3 = document.querySelectorAll(".home__contactLinks-item")[2];
const homeContactLink4 = document.querySelectorAll(".home__contactLinks-item")[3];

homeContactLink1.addEventListener("mouseenter", anim1);
homeContactLink2.addEventListener("mouseenter", anim2);
homeContactLink3.addEventListener("mouseenter", anim3);
homeContactLink4.addEventListener("mouseenter", anim4);

// HOME PARALLAX ///////////////////////////////////
function parallaxHome(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.setProperty("transform", `translateY(${distance * speed}px)`);
}

window.addEventListener("scroll", () => {
    parallaxHome(".home", window.scrollY, 0.3);

    const name = document.querySelector(".home__heading-1");
    let newPosition = (window.scrollY || window.pageYOffset) / 4;
    name.style.transform = `translateX(-${newPosition}px)`;

    const role1 = document.querySelector(".home__heading-2");
    role1.style.transform = `translateX(${newPosition}px)`;

    const role2 = document.querySelector(".home__heading-3");
    role2.style.transform = `translateX(${newPosition}px)`;

    const cube = document.querySelector(".home__cube");
    let newOpacity = 1 - ((window.scrollY || window.pageYOffset) * 2 / 1000);
    cube.style.opacity = `${newOpacity}`;

    const line = document.querySelector(".home__line-rt");
    let newHeight = 506 - (window.scrollY || window.pageYOffset) * 1.2;
    line.style.height = `${newHeight}px`;
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

/////////////////////////////////// TWEENMAX ///////////////////////////////////
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
//INFO SPLIT SCREEN
function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: 300,
        triggerElement: ".info__heading",
        triggerHook: 0,
    }).setPin(".info__heading")
        // .addIndicators()
        .addTo(controller);
}

splitScroll();

// PROJECTS CIRCLE AND HEADING/////////////

const circle = document.querySelector(".projects__circle");
const circleTrail = document.querySelector(".projects__circle-trail");
const projectsHeading = document.querySelector(".projects__heading")

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
    projectsHeading.style.setProperty("transform", `translateX(${newPosition}px)`);
});

// PROJECT IMAGES ///////////////////////////////////
// const projectsCursor = document.querySelector(".projects__cursor");
// const projectsOverlay = document.querySelectorAll(".projects__overlay");

// function moveCircle(e) {
//     TweenLite.to(projectsCursor, 0.5, {
//         css: {
//             left: e.pageX,
//             top: e.pageY
//         },
//         delay: 0.03
//     });
// }

// document.querySelector(".projects__1").addEventListener("mouseenter", () => {
//     projectsCursor.style.setProperty("background-image", "url(public/images/keeper-homepage.png)");
// });
// document.querySelector(".projects__2").addEventListener("mouseenter", () => {
//     function changeNum() {
//         return Math.floor((Math.random() * 5) + 1)
//     };
//     function changeImg() {
//         projectsCursor.style.setProperty("background-image", `url(public/images/project-5-${changeNum()}.jpg)`);
//     }
//     setInterval(changeImg, 500);
// });
// document.querySelector(".projects__3").addEventListener("mouseenter", () => {
//     projectsCursor.style.setProperty("background-image", "url(public/images/image-3.jpg)");
// });

// projectsOverlay.forEach(b => b.addEventListener("mousemove", () => {
//     TweenLite.to(projectsCursor, 0.3, { scale: 1, autoAlpha: 1 });
//     projectsOverlay.forEach(b => b.addEventListener("mousemove", moveCircle))
// }));

// projectsOverlay.forEach(b => b.addEventListener("mouseout", () => {
//     TweenLite.to(projectsCursor, 0.3, { scale: 0.1, autoAlpha: 0 });
// }));
//NAV ITEMS ANIMATION
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

//POP UP
const popup = document.getElementById("popup");
function contactPopUp() {
    if (popup.classList.length === 1) {
        popup.classList.add("nav__popup-active");
    } else {
        popup.classList.remove("nav__popup-active");
    }
};

const bodyWindow = document.querySelector(".container");
function cancelPopup() {
    if (popup.classList.length === 2) popup.classList.remove("nav__popup-active");
};
bodyWindow.addEventListener("click", cancelPopup);

//POP UP LINKs



//NAV UNDERLINE ANIMATION
const sections = document.querySelectorAll("section");
const underline = document.getElementById("underline");
const navInfo = document.querySelector(".nav__item-2");
const navProjects = document.querySelector(".nav__item-3");
const options = {
    threshold: 0.7,
};
let observer = new IntersectionObserver(navCheck, options);
function navCheck(entries) {
    entries.forEach((entry) => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            left: coords.left,
        };
        if (entry.isIntersecting) {
            underline.style.setProperty("left", `${directions.left}px`);
            if (className === "home") {
                underline.style.setProperty("width", "100vw");
            }
            if (className === "info") {
                underline.style.setProperty("width", "19.2rem");

            }
            if (className === "projects") {
                underline.style.setProperty("width", "83rem");
            }
        }
    });
}
sections.forEach((section) => {
    observer.observe(section);
});

//PARALLAX
function parallaxX(element, distance, speed) {
    const item = querySelector(element);

    item.style.setProperty("transform", `translateY(${distance * speed}px)`);
}

function parallaxY(element, distance, speed) {
    const item = querySelector(element);

    item.style.setProperty("transform", `translateY(${distance * speed}px rotate(-90deg))`);
}

window.addEventListener("scroll", () => {
    parallaxX(".home__heading", window.scrollY, 0.3);
    parallaxY(".info__heading", window.scrollY, 0.3);
});

// TWEENMAX
TweenMax.from(".home__heading", 1, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

//PROJECTS IMAGES
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

document.querySelector(".projects__1").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("background-image", "url(public/images/keeper-homepage.png)");
});
document.querySelector(".projects__2").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("background-image", "url(public/images/image-2.jpg)");
});
document.querySelector(".projects__3").addEventListener("mouseenter", () => {
    projectsCursor.style.setProperty("background-image", "url(public/images/image-3.jpg)");
});

projectsOverlay.forEach(b => b.addEventListener("mousemove", () => {
    TweenLite.to(projectsCursor, 0.3, { scale: 1, autoAlpha: 1 });
    projectsOverlay.forEach(b => b.addEventListener("mousemove", moveCircle))
}));

projectsOverlay.forEach(b => b.addEventListener("mouseout", () => {
    TweenLite.to(projectsCursor, 0.3, { scale: 0.1, autoAlpha: 0 });
}));
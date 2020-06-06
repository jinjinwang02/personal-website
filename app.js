//NAV ITEMS ANIMATION
(function () {
    const navLink = document.querySelectorAll(".nav__item");
    const cursor = document.querySelector(".nav__cursor");
    const projectLink = document.querySelectorAll(".projects__link");

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
    projectLink.forEach(b => b.addEventListener("mousemove", animate));
    projectLink.forEach(b => b.addEventListener("mouseleave", animate));
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

const body = document.querySelector(".container");
function cancelPopup() {
    if (popup.classList.length === 2) popup.classList.remove("nav__popup-active");
};
body.addEventListener("mouseover", cancelPopup);

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
        const sectionIndex = entry.target.getAttribute("data-index");
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
function parallax(element, distance, speed) {
    const item = document.querySelector(element);

    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
    parallax(".home__heading", window.scrollY, 0.4);
});

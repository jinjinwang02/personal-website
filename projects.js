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

document.querySelector(".projects__5").addEventListener("mouseenter", () => {
    setImgSize(55, 30);
    changeImages(6, 5);
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
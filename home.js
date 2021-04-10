// NAV AND CURSOR ANIMATION
(function () {
  const navLink = document.querySelectorAll('.nav__item');
  const cursor = document.querySelector('.nav__cursor');

  const animate = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
  };

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  };

  navLink.forEach((b) => b.addEventListener('mousemove', animate));
  navLink.forEach((b) => b.addEventListener('mouseleave', animate));
  window.addEventListener('mousemove', editCursor);
})();

//CONTACT LINKS ANIMATION
const homeLinkAnime = (linkIndex) => {
  anime({
    targets: `.hoverIn-${linkIndex}> .char`,
    translateY: [12, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutQuint',
    duration: 100,
    delay: (el, i) => 35 * i,
  });
};
const footerLinkAnime = (linkIndex) => {
  anime({
    targets: `.hoverIn-${linkIndex}> .char`,
    translateY: [20, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutQuint',
    duration: 80,
    delay: (el, i) => 20 * i,
  });
};

const addAnimeToLinks = (className, index, func, linkIndex) => {
  document
    .querySelectorAll(className)
    [index].addEventListener('mouseenter', () => {
      func(linkIndex);
    });
};
addAnimeToLinks('.home__contactLinks-item', 0, homeLinkAnime, 1);
addAnimeToLinks('.home__contactLinks-item', 1, homeLinkAnime, 2);
addAnimeToLinks('.home__contactLinks-item', 2, homeLinkAnime, 3);
addAnimeToLinks('.home__contactLinks-item', 3, homeLinkAnime, 4);
addAnimeToLinks('.footer__contactLinks-item', 0, footerLinkAnime, 1);
addAnimeToLinks('.footer__contactLinks-item', 1, footerLinkAnime, 2);
addAnimeToLinks('.footer__contactLinks-item', 2, footerLinkAnime, 3);
addAnimeToLinks('.footer__contactLinks-item', 3, footerLinkAnime, 4);

// HOME PARALLAX
function parallaxHome(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', () => {
  parallaxHome('.home', window.scrollY, 0.3);

  const line = document.querySelector('.home__line-rt');
  const cubeHR = document.querySelector('.home__cube_hr');
  let newOpacity = 1 - ((window.scrollY || window.pageYOffset) * 2) / 1000;
  cubeHR.style.opacity = `${newOpacity}`;
  line.style.opacity = `${newOpacity}`;
});

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    let timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    return (c * t) / d + b;
  }
  requestAnimationFrame(animation);
}

const homeTag = document.getElementById('homeTag');
homeTag.addEventListener('click', () => {
  smoothScroll('.home', 300);
});

// HOME TWEENMAX
TweenMax.from('.home__heading-1', 2, {
  x: 30,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from('.home__heading-2', 2, {
  x: -30,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from('.home__heading-3', 2, {
  x: -30,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from('.home__circle', 2, {
  delay: 1.2,
  x: -20,
  opacity: 0,
  ease: Expo.easeInOut,
});

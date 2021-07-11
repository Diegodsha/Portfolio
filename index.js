gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline();

// nav
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});

// header

t1.from("header", {
  y: "-100%",
  opacity: 0,
  duration:4,
  ease: Power4.easeOut, //'elastic'
},
);

t1.from(
  " .name-wrap",
  {
    x: "-30%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut, //'elastic'
  },
  "-=.9"
);

t1.from(
  ".lastname",
  {
    x: "30%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut, //'elastic'
  },
  "-=1"
);
t1.from(
  " .fa-github",
  {
    y: "100%",
    opacity: 1,
    duration: .7,
    // stagger:2,
    ease:'elastic'
  },
  '-=1.3'
);
t1.from(
  " .fa-linkedin-in",
  {
    y: "100%",
    opacity: 1,
    duration: .7,
    ease:'elastic'
  },
  '-=1.2'
);
t1.from(
  " .fa-twitter",
  {
    y: "100%",
    opacity: 1,
    duration: .7,
    ease:'elastic'
  },
  '-=1.1'
);
t1.from(
  " .fa-medium",
  {
    y: "100%",
    opacity: 1,
    duration: .7,
    ease:'elastic'
  },
  '-=.9'
);
t1.from(
  " .fa-angellist",
  {
    y: "100%",
    opacity: 1,
    duration: .7,
    ease:'elastic'
  },
  '-=.8'
);


t1.from(
  " nav",
  {
    y: "30%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut, //'elastic'
  },
  "-=.7"
);

// gsap.from(".projectsinfo6", {
//   scrollTrigger: {
//     trigger: ".projectsinfo6",
//     start: "bottom bottom",
//     toggleActions: "restart none restart none",
//     // markers: true,
//   },
//   y: -115,
//   opacity: 1,
//   duration: 1.2,
//   stagger: 0.3,
// });

gsap.from(".projectsinfo1", {
  scrollTrigger: {
    trigger: ".projectsinfo1",
    start: "bottom bottom",
    toggleActions: "restart none restart none",
  },
  y: -115,
  opacity: 1,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".projectsinfo2", {
  scrollTrigger: {
    trigger: ".projectsinfo2",
    start: "bottom bottom",
    toggleActions: "restart none restart none",
  },
  y: -115,
  opacity: 1,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".projectsinfo3", {
  scrollTrigger: {
    trigger: ".projectsinfo3",
    start: "bottom bottom",
    toggleActions: "restart none restart none",
  },
  y: -115,
  opacity: 1,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".projectsinfo4", {
  scrollTrigger: {
    trigger: ".projectsinfo4",
    start: "bottom bottom",
    toggleActions: "restart none restart none",
  },
  y: -115,
  opacity: 1,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".projectsinfo5", {
  scrollTrigger: {
    trigger: ".projectsinfo5",
    start: "bottom bottom",
    toggleActions: "restart none restart none",
  },
  y: -115,
  opacity: 1,
  duration: 1.2,
  stagger: 0.3,
});

// gsap.from(".projectsbtn6", {
//   scrollTrigger: {
//     trigger: ".projectsbtn6",
//     start: "top bottom ",
//     toggleActions: "restart none restart none",
//     // markers: true,
//   },
//   y: 50,
//   opacity: 0,
//   duration: 1.2,
//   stagger: 0.3,
// });


gsap.from(".projectsbtn1", {
  scrollTrigger: {
    trigger: ".projectsbtn1",
    start: "top bottom ",
    toggleActions: "restart none restart none",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".projectsbtn2", {
  scrollTrigger: {
    trigger: ".projectsbtn2",
    start: "top bottom ",
    toggleActions: "restart none restart none",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".projectsbtn3", {
  scrollTrigger: {
    trigger: ".projectsbtn3",
    start: "top bottom ",
    toggleActions: "restart none restart none",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".projectsbtn4", {
  scrollTrigger: {
    trigger: ".projectsbtn4",
    start: "top bottom ",
    toggleActions: "restart none restart none",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".projectsbtn5", {
  scrollTrigger: {
    trigger: ".projectsbtn5",
    start: "top bottom ",
    toggleActions: "restart none restart none",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.to(".section-span", {
  scrollTrigger: {
    trigger: ".section-span",
    start: "bottom bottom",
    toggleActions: "restart none restart none",
  },
  y: 0,
  opacity: 1,
  duration: 1.2,
  stagger: 1.5,
});

/*about me*/

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "bottom bottom",
    toggleActions: "restart none restart none",
  },
  x: "-30%",
  opacity: 0,
  duration: 2,
  ease: "elastic",
});

gsap.from("#about-me", {
  scrollTrigger: {
    trigger: "#about-me",
    start: "top 75% bottom",
    toggleActions: "restart none restart none",
  },
  y: "-10%",
  opacity: 0,
  duration: 2,
  ease: Power1.easeOut, //'elastic'
});

gsap.from(".email", {
  scrollTrigger: {
    trigger: ".email",
    start: "top 100%",
    // markers: true,
    toggleActions: "restart none none none",
  },
  y: -500,
  opacity: 0,
    duration: 2,
  ease: Bounce.easeOut,
});

/* svg icons */

gsap.from(".skill", {
  scrollTrigger: {
    trigger: ".skill",
    start: "bottom bottom",
    toggleActions: "restart none restart none",
  },
  x: "30%",
  opacity: 0,
  duration: 2,
  ease: "elastic",
});

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".svg-skill-1",
    // markers: true,
    start: "bottom bottom",
    end: "top -50%",
    scrub: 1.8,
    toggleActions: "restart none restart none",
  },
});

t2.from(
  ".svg-skill-1",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=2"
);

t2.from(
  ".svg-skill-2",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1.5"
);

t2.from(
  ".svg-skill-3",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1.2"
);

t2.from(
  ".svg-skill-4",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=.8"
);
t2.from(
  ".svg-skill-5",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-6",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-7",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-8",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-9",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-10",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-11",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-12",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-13",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-14",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-15",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-16",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-17",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-18",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-19",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);
t2.from(
  ".svg-skill-20",
  {
    x: "50%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1"
);

gsap.to(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "bottom bottom",
    toggleActions: "restart none restart none",
  },
  y: 0,
  opacity: 1,
  duration: 1.2,
  stagger: 1.5,
});

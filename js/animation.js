
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reasons li").forEach((el, i) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: i * 0.2
  });
});

gsap.utils.toArray(".scene").forEach((scene, i) => {
  gsap.to(scene, {
    scrollTrigger: {
      trigger: scene,
      start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: i * 0.3
  });
});

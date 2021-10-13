gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const h2 = section.querySelector("h2");
  const p = section.querySelectorAll("p");
  const img = section.querySelectorAll("img");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "bottom 100%",
        scrub: 1,
      },
    })
    .from(h2, {
      duration: 3,
      opacity: 0,
    })
    .from(img, {
      duration: 3,
      opacity: 0,
    })
    .from(p, {
      y: 100,
      duration: 3,
      opacity: 0,
      stagger: 1,
    });
});

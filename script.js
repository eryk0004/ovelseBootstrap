gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const h2 = section.querySelector("h2");
  const p = section.querySelectorAll("p");
  const imgIcons = section.querySelectorAll(".imgIcons");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "400% 400%",
        end: "bottom 100%",
        scrub: true,
      },
    })
    .from(h2, {
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

console.clear();
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);
gsap.to("#container", {
  "--target": "0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#container",
    markers: {
      startColor: '#fff',
      endColor: '#fff',
      fontSize: "0px"
    },
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e=>{
  cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")
})

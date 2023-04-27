let circle = document.querySelector("#circle");
let frame = document.querySelector(".frame");


// window.addEventListener('mousemove', (dets)=>{
//     circle.style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`;
// })
window.addEventListener('mousemove', (dets) => {
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .3,
        ease: Expo
    })
})


frame.addEventListener('mousemove', (dets) => {
    gsap.to(circle, {
        scale: 4
    })
    gsap.to(".frame span", {
        color: "rgb(245,28,45)",
        duration: .4,
        y: "-5vw"
    })
})
frame.addEventListener('mouseleave', (dets) => {
    gsap.to(circle, {
        scale: 1
    })
    gsap.to(".frame span", {
        color: "#000",
        duration: .4,
        y: "0"
    })
})



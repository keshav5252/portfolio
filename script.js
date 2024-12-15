// This timeline is for hero section animations

let tl = gsap.timeline();
const text = SplitType.create('.target');
tl.to(".char", {
    y: 0,
    stagger: 0.08,
    duration: .3,
    ease: "circ.out"
})

tl.to(".opac", {
    opacity: .7,
    y: -30,
    duration: .3
})

gsap.to(".sec1-btns", {
    y: 0,
    duration: .3,
    ease: "circ.out",
    opacity: .8
})

// This timeline is for section3 Which zoom on scroll and shows the current status
let tl2 = gsap.timeline();

tl2.to('#sec3bg', {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    scrollTrigger: {
        trigger: "#sec3 #sec3bg",
        scroller: "body",
        start: "top 90%",
        end: "bottom 120%",
        scrub: 2,
    }
});

tl2.to(".sec3bg-left ul", {
    css: {
        display: "block"
    },
    scrollTrigger: {
        trigger: "#sec3 #sec3bg",
        scroller: "body",
        start: "top 70%",
        scrub: 1,
    }
}, 0); 

tl2.to(".sec3bg-right", { 
    css: {
        display: "grid"
    },
    scrollTrigger: {
        trigger: "#sec3 #sec3bg",
        scroller: "body",
        start: "top 70%",
        scrub: 1,
    }
}, 0);

// For contact section animations and line

let initialPath = "M 0 5 Q 50 5 100 5";
let space = document.querySelector(".space");

space.addEventListener("mousemove", function (e) {
    let rect = space.getBoundingClientRect();
    let relativeY = e.clientY - rect.top;

    let finalPath = `M 0 5 Q 50 ${relativeY/10} 100 5`;

    gsap.to(".space path", {
        attr: { d: finalPath }, // Correct attribute to target for GSAP
        duration: 0.5,
        ease: "power2.out",
    });
});

space.addEventListener("mouseleave", function (e) {

    let finalPath = `M 0 5 Q 50 5 100 5`;
    gsap.to(".space path", {
        attr: { d: finalPath }, // Correct attribute to target for GSAP
        duration: 0.8,
        ease: "elastic.out(1, 0.2)",
    });
});



let contactElems = document.querySelectorAll(".sec5contact-left h2, .sec5contact-left input , .sec5contact-left textarea");

gsap.to(contactElems, {
    x: 0,
    opacity: .7,
    stagger: 0.2,
    scrollTrigger: {
        trigger: contactElems,
        scroller: "body",
        start: "top 80%",
        end: "bottom 10%",
    }
})

gsap.to(".sec5contact-right img", {
    x: 0,
    opacity: .7,
    scrollTrigger: {
        trigger: ".sec5contact-right img",
        scroller: "body",
        start: "top 80%",
        end: "bottom 10%",
    }
})

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    alert('Form is submitted');
}

// Giving hamburger some power : )

const ham = document.querySelector("#ham");
const ul = document.querySelector(".nav-right ul");
const close = document.querySelector("#close");

ham.addEventListener('click', ()=> {
    ul.style = "top: 0;"
})

close.addEventListener("click", ()=>{
    ul.style = "top: -380%;"
})


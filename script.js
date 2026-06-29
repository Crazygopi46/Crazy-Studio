// Crazy Studio Website

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Button Animation
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter",()=>{
    btn.style.transform="scale(1.1)";
});

btn.addEventListener("mouseleave",()=>{
    btn.style.transform="scale(1)";
});

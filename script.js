window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 900);
});

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

document.querySelectorAll(".nav a, .logo").forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = link.getAttribute("href");
    if (target && target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

document.querySelectorAll(".portfolio-item img").forEach((img) => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.92);
      display: grid;
      place-items: center;
      z-index: 10000;
      padding: 20px;
      cursor: zoom-out;
    `;

    const big = document.createElement("img");
    big.src = img.src;
    big.alt = img.alt;
    big.style.cssText = `
      max-width: min(92vw, 1100px);
      max-height: 88vh;
      width: auto;
      height: auto;
      border-radius: 16px;
      box-shadow: 0 20px 70px rgba(0,0,0,0.7);
      border: 1px solid rgba(212,175,55,0.18);
    `;

    overlay.appendChild(big);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());
  });
});

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill all required fields.");
      return;
    }

    const subject = encodeURIComponent(`Website Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${form.querySelector('input[name="phone"]').value.trim()}\n\nMessage:\n${message}`
    );

    form.action = `mailto:gopiofficial2005@gmail.com?subject=${subject}&body=${body}`;
  });
}

const year = document.querySelector(".footer p");
if (year) {
  year.innerHTML = year.innerHTML.replace("2026", new Date().getFullYear());
}

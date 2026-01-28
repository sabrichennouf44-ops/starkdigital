// Burger menu
const burger = document.querySelector(".burger");
const body = document.body;
const navLinks = document.querySelectorAll(".nav-link");

if (burger) {
  burger.addEventListener("click", () => {
    body.classList.toggle("nav-open");
  });
}

// Close mobile nav when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
  });
});

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((el) => observer.observe(el));

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all
    faqItems.forEach((i) => {
      i.classList.remove("active");
      const a = i.querySelector(".faq-answer");
      if (a) {
        a.style.maxHeight = null;
      }
    });

    // Toggle current
    if (!isActive) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const logos = ["Google", "Microsoft", "Samsung", "Shopee", "Tokopedia", "Pertamina", "Telkom Indonesia", "BCA", "Astra"];

const highlights = ["Experienced Team", "Creative Concepts", "Professional Management", "End-to-End Service", "Nationwide Coverage"];

const services = [
  ["Corporate Events", "fa-building", "Conferences, town halls, brand gatherings, and executive experiences with polished operations."],
  ["Wedding Organizer", "fa-heart", "Elegant celebrations with refined styling, reliable vendor control, and personal guest journeys."],
  ["Music Concerts", "fa-music", "Stage, sound, lighting, artist handling, crowd flow, and production management."],
  ["Business Summit", "fa-chart-line", "Multi-session summits built for networking, content, sponsors, and executive presence."],
  ["Conference", "fa-users", "Professional agendas, registration, speaker logistics, and audience engagement."],
  ["Seminar", "fa-chalkboard-user", "Focused learning experiences with seamless program coordination and technical support."],
  ["Exhibition", "fa-store", "Booth planning, floor operations, visitor routing, and partner coordination."],
  ["Product Launch", "fa-rocket", "High-impact reveals with media moments, immersive storytelling, and brand theater."],
  ["Award Ceremony", "fa-trophy", "Gala-grade staging, protocol, run-of-show precision, and VIP hospitality."],
  ["Festival", "fa-wand-magic-sparkles", "Large-scale crowd experiences with vendor, security, and production orchestration."],
  ["Private Party", "fa-champagne-glasses", "Intimate premium celebrations with thoughtful details and luxury ambience."],
  ["Brand Activation", "fa-bullhorn", "Experiential campaigns that bring brand stories into memorable real-world moments."]
];

const stats = [
  ["250", "+", "Events Organized"],
  ["120", "+", "Corporate Clients"],
  ["50", "+", "Agency Partners"],
  ["98", "%", "Client Satisfaction"],
  ["10", "+", "Years Experience"]
];

const portfolio = [
  {
    category: "Concert",
    name: "Skyline Music Festival",
    location: "Jakarta",
    year: "2025",
    client: "Aurora Live",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=85"
  },
  {
    category: "Wedding",
    name: "The Aurelia Wedding",
    location: "Bali",
    year: "2025",
    client: "Private Client",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85"
  },
  {
    category: "Corporate",
    name: "Future Leaders Gala",
    location: "Singapore",
    year: "2024",
    client: "NOVA Group",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85"
  },
  {
    category: "Summit",
    name: "International Business Summit",
    location: "Jakarta",
    year: "2025",
    client: "Global Trade Council",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85"
  },
  {
    category: "Festival",
    name: "Island Culture Festival",
    location: "Lombok",
    year: "2024",
    client: "Tourism Board",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1400&q=85"
  },
  {
    category: "Award Night",
    name: "Excellence Awards Night",
    location: "Surabaya",
    year: "2025",
    client: "MediaOne",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85"
  },
  {
    category: "Conference",
    name: "Technology Vision Forum",
    location: "Bandung",
    year: "2024",
    client: "TechWorks",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85"
  },
  {
    category: "Product Launch",
    name: "LUXE One Reveal",
    location: "Jakarta",
    year: "2025",
    client: "LUXE Mobility",
    img: "https://images.unsplash.com/photo-1561489396-888724a1543d?auto=format&fit=crop&w=1400&q=85"
  }
];

const cases = [
  {
    title: "International Business Summit 2025",
    facts: ["3,000 Attendees", "25 Speakers", "15 Sponsors", "2-Day Event"],
    result: "Successfully delivered with 99.9% operational excellence."
  },
  {
    title: "Luxury Island Wedding",
    facts: ["450 Guests", "5 Venues", "3-Day Celebration", "VIP Hospitality"],
    result: "Created a seamless destination experience from arrival to after-party."
  },
  {
    title: "National Product Launch",
    facts: ["1,200 Guests", "80 Media", "Live Streaming", "Immersive Reveal"],
    result: "Generated premium brand presence and a high-impact launch moment."
  }
];

const timeline = ["Consultation", "Planning", "Concept Design", "Execution", "Live Event", "Post Event Evaluation"];

const testimonials = [
  {
    quote: "NEXA Events exceeded every expectation. Every detail was flawlessly executed.",
    name: "Sarah Williams",
    title: "CEO",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=85"
  },
  {
    quote: "Our annual conference has never been this impressive. The team brought clarity, taste, and absolute control.",
    name: "David Chen",
    title: "Marketing Director",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85"
  },
  {
    quote: "The wedding was beyond our dreams. Every room, transition, and moment felt intentional.",
    name: "Amanda Lewis",
    title: "Bride",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=85"
  }
];

const awards = [
  ["Best Event Organizer", "fa-medal"],
  ["ISO Certified", "fa-certificate"],
  ["Event Excellence Award", "fa-award"],
  ["Top Corporate Event Agency", "fa-star"]
];

const team = [
  ["Alicia Renata", "CEO", "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85"],
  ["Marco Wijaya", "Creative Director", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85"],
  ["Nadine Putri", "Project Manager", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85"],
  ["Rafael Tan", "Production Lead", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85"],
  ["Maya Santoso", "Event Coordinator", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85"]
];

const behindScenes = [
  ["Preparation", "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1600&q=85"],
  ["Stage Setup", "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85"],
  ["Lighting", "https://images.unsplash.com/photo-1504509546545-e000b4a62425?auto=format&fit=crop&w=1600&q=85"],
  ["Sound Check", "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=85"],
  ["Crew Coordination", "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=85"],
  ["Drone Footage", "https://images.unsplash.com/photo-1483393458019-411bc6bd1045?auto=format&fit=crop&w=1600&q=85"]
];

const faqs = [
  ["How early should we book?", "For large events, 3 to 9 months is ideal. Smaller private events can often be planned with shorter timelines depending on production complexity."],
  ["Do you organize international events?", "Yes. We support local, national, and international event scopes with partner coordination, logistics planning, and destination support."],
  ["Can you provide full event management?", "Yes. We can manage concept, budgeting, venue, vendors, production, permits, hospitality, run-of-show, and post-event reporting."],
  ["Do you handle permits?", "Yes. Permit support can be included in the scope, especially for concerts, public events, festivals, and government-related programs."],
  ["Can you customize packages?", "Absolutely. Each proposal is tailored to the event goal, guest profile, timeline, venue, and desired production level."]
];

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function renderContent() {
  qs("#trusted-logos").innerHTML = logos.map((logo) => `<div class="logo-card">${logo}</div>`).join("");

  qs("#about-highlights").innerHTML = highlights
    .map((item) => `<div class="highlight-card reveal"><i class="fa-solid fa-check"></i>${item}</div>`)
    .join("");

  qs("#services-grid").innerHTML = services
    .map(
      ([title, icon, description]) => `
        <article class="service-card reveal">
          <div class="service-icon"><i class="fa-solid ${icon}"></i></div>
          <h3 class="mt-7 font-heading text-xl font-bold text-primary dark:text-white">${title}</h3>
          <p class="mt-4 leading-7 text-slate-500 dark:text-slate-300">${description}</p>
          <button class="mt-6 font-bold text-accent" type="button">Read More <i class="fa-solid fa-arrow-right ml-2 text-sm"></i></button>
        </article>`
    )
    .join("");

  qs("#stats-grid").innerHTML = stats
    .map(
      ([number, suffix, label]) => `
        <article class="bento-card stat-card reveal">
          <div class="stat-number"><span class="counter" data-target="${number}">0</span>${suffix}</div>
          <p class="mt-4 font-bold text-slate-500 dark:text-slate-300">${label}</p>
        </article>`
    )
    .join("");

  qs("#portfolio-grid").innerHTML = portfolio
    .map(
      (item) => `
        <article class="portfolio-card reveal" tabindex="0" role="button" aria-label="Open ${item.name} portfolio item" data-img="${item.img}" data-caption="${item.name} - ${item.location}, ${item.year} - ${item.client}">
          <img src="${item.img}" alt="${item.category} event: ${item.name}" loading="lazy" />
          <div class="portfolio-overlay">
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-luxury">${item.category}</p>
            <h3 class="mt-2 font-heading text-2xl font-bold">${item.name}</h3>
            <p class="mt-3 text-sm text-slate-200">${item.location} · ${item.year} · ${item.client}</p>
            <p class="mt-4 font-bold">View Details <i class="fa-solid fa-expand ml-2 text-sm"></i></p>
          </div>
        </article>`
    )
    .join("");

  qs("#case-grid").innerHTML = cases
    .map(
      (item) => `
        <article class="case-card reveal">
          <h3 class="font-heading text-2xl font-bold text-primary dark:text-white">${item.title}</h3>
          <div class="mt-6 grid gap-3">
            ${item.facts.map((fact) => `<p class="rounded-2xl bg-slate-100 px-4 py-3 font-bold text-slate-600 dark:bg-primary/50 dark:text-slate-200"><i class="fa-solid fa-circle-check mr-2 text-luxury"></i>${fact}</p>`).join("")}
          </div>
          <p class="mt-6 border-t border-slate-200 pt-6 leading-7 text-slate-500 dark:border-white/10 dark:text-slate-300"><strong class="text-primary dark:text-white">Result:</strong> ${item.result}</p>
        </article>`
    )
    .join("");

  qs("#timeline-steps").innerHTML = timeline
    .map(
      (item, index) => `
        <article class="timeline-step">
          <div class="grid h-11 w-11 place-items-center rounded-full bg-primary font-bold text-white">${index + 1}</div>
          <h3 class="mt-5 font-heading text-lg font-bold text-primary dark:text-white">${item}</h3>
        </article>`
    )
    .join("");

  qs("#testimonial-wrapper").innerHTML = testimonials
    .map(
      (item) => `
        <article class="swiper-slide testimonial-card">
          <div class="text-luxury">${"★".repeat(5)}</div>
          <p class="mt-8 font-heading text-2xl font-bold leading-snug text-primary dark:text-white">"${item.quote}"</p>
          <div class="mt-10 flex items-center gap-4">
            <img class="h-16 w-16 rounded-full object-cover" src="${item.img}" alt="${item.name}" loading="lazy" />
            <div>
              <h3 class="font-bold text-primary dark:text-white">${item.name}</h3>
              <p class="text-sm text-slate-500 dark:text-slate-300">${item.title}</p>
            </div>
          </div>
        </article>`
    )
    .join("");

  qs("#awards-grid").innerHTML = awards
    .map(
      ([title, icon]) => `
        <article class="award-card reveal">
          <div class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary text-2xl text-luxury dark:bg-white/10"><i class="fa-solid ${icon}"></i></div>
          <h3 class="mt-5 font-heading text-xl font-bold text-primary dark:text-white">${title}</h3>
        </article>`
    )
    .join("");

  qs("#team-grid").innerHTML = team
    .map(
      ([name, role, img]) => `
        <article class="team-card reveal">
          <img src="${img}" alt="${name}, ${role}" loading="lazy" />
          <h3 class="mt-5 font-heading text-lg font-bold text-primary dark:text-white">${name}</h3>
          <p class="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-300">${role}</p>
          <a class="mx-auto mt-4 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-primary transition hover:bg-accent hover:text-white dark:bg-primary/60 dark:text-white" href="#" aria-label="${name} LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </article>`
    )
    .join("");

  qs("#bts-wrapper").innerHTML = behindScenes
    .map(
      ([title, img]) => `
        <article class="swiper-slide bts-slide">
          <img src="${img}" alt="${title} behind the scenes" loading="lazy" />
          <div class="bts-caption">
            <p class="text-sm font-bold uppercase tracking-[0.25em] text-luxury">Behind The Scenes</p>
            <h3 class="mt-2 font-heading text-3xl font-bold">${title}</h3>
          </div>
        </article>`
    )
    .join("");

  qs("#faq-list").innerHTML = faqs
    .map(
      ([question, answer], index) => `
        <article class="faq-item reveal ${index === 0 ? "active" : ""}">
          <button class="faq-button" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <span>${question}</span>
            <i class="fa-solid fa-plus"></i>
          </button>
          <div class="faq-answer"><p>${answer}</p></div>
        </article>`
    )
    .join("");
}

function initTheme() {
  const storedTheme = localStorage.getItem("nexa-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
  document.documentElement.classList.toggle("dark", shouldUseDark);

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("nexa-theme", isDark ? "dark" : "light");
  };

  qs("#theme-toggle")?.addEventListener("click", toggle);
  qs("#mobile-theme-toggle")?.addEventListener("click", toggle);
}

function initNavigation() {
  const header = qs("#site-header");
  const menuButton = qs("#mobile-menu-button");
  const mobileMenu = qs("#mobile-menu");

  const updateHeader = () => header.classList.toggle("header-scrolled", window.scrollY > 20);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden") === false;
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  qsa("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

function initSmoothScroll() {
  if (!window.Lenis || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.9
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function initAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#hero .reveal", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.25
  });

  qsa("section").forEach((section) => {
    if (section.id === "hero") return;
    const items = qsa(".reveal", section);
    if (!items.length) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 36, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: "top 78%"
        }
      }
    );
  });

  gsap.to(".hero-grid", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to("#timeline-progress", {
    width: "calc(100% - 4rem)",
    ease: "none",
    scrollTrigger: {
      trigger: ".timeline-wrap",
      start: "top 75%",
      end: "bottom 55%",
      scrub: true
    }
  });

  qsa("[data-parallax]").forEach((item) => {
    gsap.to(item, {
      yPercent: Number(item.dataset.parallax) || -10,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
}

function initFramerMotionEnhancements() {
  const motion = window.framerMotionDom;
  if (!motion) return;

  motion.inView(".service-card", (element) => {
    motion.animate(element, { scale: [0.96, 1], opacity: [0, 1] }, { duration: 0.7, easing: "ease-out" });
  });
}

function initCounters() {
  const counters = qsa(".counter");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);
        const duration = 1600;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.round(target * eased).toString();
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        obs.unobserve(counter);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initSliders() {
  if (!window.Swiper) return;

  new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4200,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev"
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 }
    }
  });

  new Swiper(".bts-swiper", {
    slidesPerView: 1,
    loop: true,
    speed: 900,
    autoplay: {
      delay: 2600,
      disableOnInteraction: false
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 130,
      modifier: 1.8,
      slideShadows: false
    }
  });
}

function initPortfolioLightbox() {
  const lightbox = qs("#lightbox");
  const image = qs("#lightbox-img");
  const caption = qs("#lightbox-caption");
  const close = qs("#lightbox-close");

  const open = (card) => {
    image.src = card.dataset.img;
    image.alt = card.dataset.caption;
    caption.textContent = card.dataset.caption;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const hide = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    image.src = "";
  };

  qsa(".portfolio-card").forEach((card) => {
    card.addEventListener("click", () => open(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(card);
      }
    });
  });

  close.addEventListener("click", hide);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) hide();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("active")) hide();
  });
}

function initFaq() {
  qsa(".faq-item").forEach((item) => {
    const button = qs(".faq-button", item);
    button.addEventListener("click", () => {
      const isActive = item.classList.toggle("active");
      button.setAttribute("aria-expanded", String(isActive));
    });
  });
}

function initPointerEffects() {
  const glow = qs("#cursor-glow");
  const progress = qs("#scroll-progress");
  const backToTop = qs("#back-to-top");

  window.addEventListener(
    "pointermove",
    (event) => {
      glow.style.transform = `translate3d(${event.clientX - 210}px, ${event.clientY - 210}px, 0)`;
    },
    { passive: true }
  );

  window.addEventListener(
    "scroll",
    () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      progress.style.width = `${percent}%`;
      backToTop.classList.toggle("visible", window.scrollY > 700);
    },
    { passive: true }
  );

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  qsa(".magnetic").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.08}px, ${y * 0.16}px)`;
    });
    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}

function initForms() {
  qsa("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button[type='submit']");
      if (!button) return;

      const original = button.textContent;
      button.textContent = "Thank you. We will contact you soon.";
      setTimeout(() => {
        button.textContent = original;
        form.reset();
      }, 2600);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  initTheme();
  initNavigation();
  initSmoothScroll();
  initAnimations();
  initFramerMotionEnhancements();
  initCounters();
  initSliders();
  initPortfolioLightbox();
  initFaq();
  initPointerEffects();
  initForms();
});

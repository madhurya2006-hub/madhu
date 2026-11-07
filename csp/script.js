/* =========================================================
   EDITABLE PROJECT DETAILS — update this section first.
   For photos, put files in an "images" folder and use paths
   such as "images/week-1.jpg". Leave image: "" for placeholder.
   ========================================================= */
const CONFIG = {
  college: "SREE VENKATESWARA COLLEGE (SVCN)",
  projectYear: "2026",
  guide: "MR.T.Guru Prasad",
  members: [
    { name: "G. Madhurya", role: "Team coordinator", image: "images/team1.jpg" },
    { name: "I.jasmitha", role: "Survey and documentation", image: "images/team2.jpg" },
    { name: "A.sravya", role: "Data collection and analysis", image: "images/team3.jpg" },
    { name: "G.varshitha", role: "Awareness and presentation", image: "images/team4.jpg" }
  ],
  // Replace these sample figures with actual survey counts.
  surveySources: [
    { label: "Vehicles", value: 32 },
    { label: "Road dust", value: 24 },
    { label: "Waste burning", value: 18 },
    { label: "Industries", value: 14 },
    { label: "Other", value: 12 }
  ],
  awareness: [
    { label: "Aware", value: 62 },
    { label: "Not sure / unaware", value: 38 }
  ],
  // Add your own verified local statistics here if available.
  weeks: [
    { title: "Topic selection and planning", text: "Our team selected air pollution as the Community Service Project topic, focusing on its causes and effects in Nellore. We discussed the project objectives, identified the community we wanted to learn from, and prepared an initial activity plan.", caption: "Planning discussion", image: "images/week1.jpg" },
    { title: "Permission from the instructor", text: "We explained the project idea, objectives, and proposed eight-week schedule to our project guide. We sought guidance on the activities and made changes based on the instructor’s suggestions.", caption: "Meeting with project guide", image: "images/week2.jpg" },
    { title: "Permission from the Sachivalayam", text: "We approached the relevant Village/Ward Secretariat to explain our community survey plan. We requested permission and guidance before interacting with residents.", caption: "Secretariat visit", image: "images/week3.jpg" },
    { title: "Designing the survey questionnaire", text: "We prepared simple, clear questions about residents’ observations of air pollution, possible sources, and awareness of prevention. We reviewed the questions to keep the survey respectful and easy to answer.", caption: "Questionnaire preparation", image: "images/week4.jpg" },
    { title: "Conducting the community survey", text: "Team members interacted with residents in the selected area of Nellore and recorded their responses. We explained the purpose of the survey and avoided collecting unnecessary personal information.", caption: "Community survey photographs", image: "images/week5.jpg" },
    { title: "Collecting and analysing data", text: "We organised the responses, checked the totals, and grouped answers into common themes. The charts on this website should be updated with the final verified survey counts.", caption: "Data analysis", image: "images/week6.jpg" },
    { title: "Awareness activity and suggested solutions", text: "We shared practical information about reducing pollution, such as avoiding waste burning and choosing cleaner travel options where possible. We noted community suggestions and discussed realistic actions.", caption: "Awareness activity", image: "images/week7.jpg" },
    { title: "Final report and conclusion", text: "We summarised the activities, survey findings, observations, and limitations in our final report. The team reflected on what we learned and identified steps that residents and local stakeholders can consider.", caption: "Final report and team review", image: "images/week8.jpg" }
  ],
  gallery: [
    { caption: "Team planning", image: "images/gallery1.jpg" }, { caption: "Instructor meeting", image: "images/gallery5.jpg" },
    { caption: "Secretariat permission", image: "images/gallery2.jpg" }, { caption: "Questionnaire", image: "images/gallery6.jpg" },
    { caption: "Community survey", image: "images/gallery3.jpg" }, { caption: "Data collection", image: "images/gallery7.jpg" },
    { caption: "Awareness activity", image: "images/gallery4.jpg" }, { caption: "Team photograph", image: "images/gallery8.jpg" }
  ]
};

// Fill common project details.
document.getElementById("collegeNameHero").textContent = CONFIG.college;
document.getElementById("footerCollege").textContent = CONFIG.college;
document.getElementById("footerYear").textContent = `Project year · ${CONFIG.projectYear}`;
document.getElementById("guideName").textContent = CONFIG.guide;
document.getElementById("heroTeam").textContent =
  `${CONFIG.members.map(m => m.name).join(" · ")}  |  Guide: ${CONFIG.guide}`;

// Create the eight-week timeline.
const timeline = document.getElementById("timelineItems");
CONFIG.weeks.forEach((week, index) => {
  const item = document.createElement("article");
  item.className = "week-item reveal";
  const photo = week.image
    ? `<img src="${week.image}" alt="${week.caption}">`
    : `<span>ADD WEEK ${index + 1} PHOTO<small>${week.caption}</small></span>`;
  item.innerHTML = `
    <div class="week-dot">${String(index + 1).padStart(2, "0")}</div>
    <div class="week-content">
      <div><h3>Week ${index + 1}: ${week.title}</h3><p>${week.text}</p></div>
      <div class="photo-placeholder">${photo}</div>
    </div>`;
  timeline.appendChild(item);
});

// Team cards.
const teamGrid = document.getElementById("teamGrid");
CONFIG.members.forEach(member => {
  const card = document.createElement("article");
  card.className = "member-card reveal";
  const photo = member.image
    ? `<img src="${member.image}" alt="Photo of ${member.name}">`
    : `<span>ADD MEMBER PHOTO</span>`;
  card.innerHTML = `<div class="member-photo">${photo}</div><h3>${member.name}</h3><p>${member.role}</p>`;
  teamGrid.appendChild(card);
});

// Gallery tiles and accessible lightbox.
const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
CONFIG.gallery.forEach((item, index) => {
  const tile = document.createElement("button");
  tile.className = "gallery-tile reveal";
  tile.type = "button";
  tile.setAttribute("aria-label", `Open gallery image: ${item.caption}`);
  if (item.image) {
    tile.innerHTML = `<img src="${item.image}" alt="${item.caption}"><span class="placeholder-label">${item.caption}</span>`;
  } else {
    tile.innerHTML = `<span class="placeholder-label">PHOTO ${index + 1}<br>${item.caption}</span>`;
  }
  tile.addEventListener("click", () => {
    if (!item.image) {
      lightboxImage.removeAttribute("src");
      lightboxImage.alt = "Photo placeholder — add an image path in script.js";
      lightboxCaption.textContent = `${item.caption} — add an image path in CONFIG.gallery.`;
    } else {
      lightboxImage.src = item.image;
      lightboxImage.alt = item.caption;
      lightboxCaption.textContent = item.caption;
    }
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
  galleryGrid.appendChild(tile);
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });

// Mobile navigation.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Scroll reveal animations.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Animated counters.
const stats = document.querySelectorAll("[data-count]");
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    const start = performance.now();
    const duration = 1200;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    statsObserver.unobserve(el);
  });
}, { threshold: 0.6 });
stats.forEach(el => statsObserver.observe(el));

// Timeline progress line follows the scroll position through the timeline.
const progressLine = document.getElementById("timelineProgress");
const timelineSection = document.querySelector(".timeline");
function updateTimelineProgress() {
  const rect = timelineSection.getBoundingClientRect();
  const viewport = window.innerHeight;
  const total = rect.height;
  const travelled = Math.min(Math.max(viewport * 0.72 - rect.top, 0), total);
  progressLine.style.height = `${(travelled / total) * 100}%`;
}
window.addEventListener("scroll", updateTimelineProgress, { passive: true });
window.addEventListener("resize", updateTimelineProgress);
updateTimelineProgress();

// Lightweight canvas charts — no chart library needed.
function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  return { ctx, width, height };
}
function drawBarChart(canvas, data) {
  const { ctx, width, height } = setupCanvas(canvas);
  const pad = { left: 12, right: 12, top: 12, bottom: 38 };
  const max = Math.max(...data.map(d => d.value), 1);
  const slot = (width - pad.left - pad.right) / data.length;
  const barWidth = Math.min(42, slot * .58);
  ctx.font = "11px system-ui";
  data.forEach((d, i) => {
    const x = pad.left + i * slot + (slot - barWidth) / 2;
    const barHeight = (height - pad.top - pad.bottom) * d.value / max;
    const y = height - pad.bottom - barHeight;
    ctx.fillStyle = "#6eb58a";
    ctx.beginPath(); ctx.roundRect(x, y, barWidth, barHeight, 5); ctx.fill();
    ctx.fillStyle = "#294b5a"; ctx.textAlign = "center";
    ctx.fillText(String(d.value), x + barWidth / 2, y - 6);
    ctx.fillStyle = "#62747c";
    ctx.fillText(d.label, x + barWidth / 2, height - 15);
  });
}
function drawDoughnut(canvas, data) {
  const { ctx, width, height } = setupCanvas(canvas);
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const colors = ["#6eb58a", "#b8c7c4", "#496c78", "#d5b978"];
  const x = width * .34, y = height * .49, radius = Math.min(82, height * .36);
  let start = -Math.PI / 2;
  data.forEach((d, i) => {
    const end = start + (d.value / total) * Math.PI * 2;
    ctx.beginPath(); ctx.arc(x, y, radius, start, end); ctx.arc(x, y, radius * .58, end, start, true);
    ctx.closePath(); ctx.fillStyle = colors[i % colors.length]; ctx.fill();
    start = end;
  });
  ctx.textAlign = "left"; ctx.font = "12px system-ui";
  data.forEach((d, i) => {
    const ly = height * .35 + i * 28;
    ctx.fillStyle = colors[i % colors.length]; ctx.fillRect(width * .63, ly - 9, 10, 10);
    ctx.fillStyle = "#435a64"; ctx.fillText(`${d.label}: ${d.value}%`, width * .63 + 17, ly);
  });
}
function renderCharts() {
  drawBarChart(document.getElementById("sourcesChart"), CONFIG.surveySources);
  drawDoughnut(document.getElementById("awarenessChart"), CONFIG.awareness);
}
renderCharts();
window.addEventListener("resize", renderCharts);

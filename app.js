/**
 * ====================================================================
 * TATRY POMAHAJU DETOM 2026 — Logika webu (JavaScript)
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.SITE_DATA;
  if (!data) {
    console.error("Objekt SITE_DATA nebol najdeny v content.js!");
    return;
  }

  initMetaAndStats(data);
  initMobileNavigation();
  initAboutSections(data.aboutProject);
  initRouteMap(data.route);
  initDiaryFeed(data.diary);
  initRequisites(data.requisites);
  initLightbox();
  initShareModal();
  initGlobalCopyHandlers();
});

// SVG ikony pre sekciu O projekte a rekvizity (ui-ux-pro-max standard)
const ICONS = {
  child: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  mountain: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="m4.14 15 .86-1.5 2 2 3-3 2 2 2.5-2.5"/></svg>`,
  elevation: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 3 9 4-4 5 7 6-12"/><path d="M3 21h18"/></svg>`,
  shield: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  bank: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2 2 7h20z"/></svg>`,
  heart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  share: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`
};

const CLOUD_COUNTER_NS = "tatrypomahajudetom-2026";

// 1. Štatistiky a meta informácie
function initMetaAndStats(data) {
  const meta = data.meta;
  const stats = data.trekStats;

  if (meta) {
    document.title = meta.siteTitle || document.title;
    const heroDesc = document.getElementById("heroDesc");
    if (heroDesc && meta.authorBio) heroDesc.textContent = meta.authorBio;
  }

  if (stats) {
    const distEl = document.getElementById("statDistance");
    if (distEl) distEl.textContent = stats.distance;

    const elevEl = document.getElementById("statElevation");
    if (elevEl) elevEl.textContent = stats.elevation;

    const durEl = document.getElementById("statDuration");
    if (durEl) durEl.textContent = stats.duration;

    const routeEl = document.getElementById("statRoute");
    if (routeEl) routeEl.textContent = `${stats.startPoint} ➔ ${stats.endPoint}`;
  }

  const posterCard = document.getElementById("posterPreviewCard");
  if (posterCard) {
    const openPoster = () => {
      openLightbox("assets/img/poster.jpg", "Tatry pomáhajú deťom 2026 — Oficiálny plagát a výškový profil trasy");
    };
    posterCard.addEventListener("click", openPoster);
    posterCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPoster();
      }
    });
  }
}

// 2. Mobilná navigácia (Hamburger & Drawer)
function initMobileNavigation() {
  const toggleBtn = document.getElementById("menuToggleBtn");
  const drawer = document.getElementById("mobileNavDrawer");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("active");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  drawer.addEventListener("click", (e) => {
    if (e.target.closest(".mobile-nav-link")) {
      drawer.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", (e) => {
    if (drawer.classList.contains("active") && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// 3. Sekcia O projekte (4 piliere s modernými SVG ikonami)
function initAboutSections(about) {
  const grid = document.getElementById("aboutFeaturesGrid");
  if (!grid || !about || !about.sections) return;

  grid.innerHTML = "";
  about.sections.forEach((sec) => {
    const card = document.createElement("div");
    card.className = "feature-card";
    const iconSvg = ICONS[sec.iconType] || ICONS.heart;

    card.innerHTML = `
      <div class="feature-icon feature-icon-${sec.iconType || 'default'}">
        ${iconSvg}
      </div>
      <h3 class="feature-title">${sec.title}</h3>
      <p class="feature-text">${sec.text}</p>
    `;
    grid.appendChild(card);
  });
}

// 4. Interaktívna mapa Tatier (Leaflet)
function initRouteMap(route) {
  const mapElement = document.getElementById("routeMap");
  if (!mapElement || !window.L || !route || !route.points) return;

  const map = L.map("routeMap", {
    scrollWheelZoom: false,
    tap: true
  }).setView(route.initialCenter || [49.20, 19.95], route.initialZoom || 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const latLngs = [];

  route.points.forEach((point) => {
    latLngs.push(point.coords);

    let color = "#dc2626";
    let radius = 7;
    let label = "Vrchol / Sedlo";

    if (point.status === "start") {
      color = "#059669";
      radius = 9;
      label = "Štart expedície";
    } else if (point.status === "target") {
      color = "#0284c7";
      radius = 9;
      label = "Cieľ expedície";
    }

    const marker = L.circleMarker(point.coords, {
      radius: radius,
      fillColor: color,
      color: "#ffffff",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.95
    }).addTo(map);

    const popupHtml = `
      <div style="font-family: inherit; font-size: 13px; line-height: 1.4;">
        <strong style="color: ${color};">${label}</strong><br>
        <b style="font-size: 14px;">${point.title}</b>
        ${point.note ? `<br><span style="color: #64748b;">${point.note}</span>` : ''}
      </div>
    `;
    marker.bindPopup(popupHtml);
  });

  if (latLngs.length > 1) {
    L.polyline(latLngs, {
      color: "#dc2626",
      weight: 3,
      opacity: 0.75,
      dashArray: "6, 8"
    }).addTo(map);
  }
}

// 5. Denník z trasy s akordeónom (najnovší deň otvorený, ostatné zbalené)
function initDiaryFeed(diary) {
  const feed = document.getElementById("diaryFeed");
  if (!feed || !diary) return;

  feed.innerHTML = "";

  diary.forEach((post, index) => {
    const card = document.createElement("article");
    card.className = "diary-card";
    const postId = post.id || `day-${post.dayNumber}`;
    card.id = postId;

    // Prvý (najnovší) deň je rozbalený, ostatné sú kompaktne zbalené
    const isExpanded = index === 0;
    if (isExpanded) {
      card.classList.add("expanded");
    }

    const baseLikes = post.initialLikes || 186;
    const likedKey = `liked_${postId}`;
    const isLiked = localStorage.getItem(likedKey) === "true";
    const initialDisplay = baseLikes + (isLiked ? 1 : 0);

    const dayLabel = post.dayNumber === 0 ? "Úvod" : `Deň ${post.dayNumber}`;

    let photosHtml = "";
    if (post.photos && post.photos.length > 0) {
      const countClass = `photos-count-${Math.min(2, post.photos.length)}`;
      const thumbs = post.photos.map((photo) => `
        <div class="photo-thumb" data-full="${photo.url}" data-caption="${photo.caption || ''}" role="button" tabindex="0" aria-label="Zväčšiť fotografiu">
          <img src="${photo.url}" alt="${photo.caption || 'Foto'}" loading="lazy">
          <div class="photo-overlay">
            <span class="photo-caption-tag">${photo.caption || 'Zväčšiť fotografiu'}</span>
          </div>
        </div>
      `).join("");

      photosHtml = `<div class="diary-photos-grid ${countClass}">${thumbs}</div>`;
    }

    card.innerHTML = `
      <!-- Kompaktná zhrňujúca lišta (klikateľná pre rozbalenie/zbalenie) -->
      <div class="diary-card-summary" role="button" tabindex="0" aria-expanded="${isExpanded ? 'true' : 'false'}" aria-controls="body-${postId}">
        <div class="summary-left">
          <span class="day-badge">${dayLabel} • ${post.date}</span>
          <span class="summary-title">${post.title}</span>
          <span class="summary-loc">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${post.location}</span>
          </span>
        </div>
        <div class="summary-right">
          <span class="diary-toggle-label">${isExpanded ? 'Zbaliť' : 'Rozbaliť'}</span>
          <svg class="chevron-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>

      <!-- Rozbalený obsah dňa -->
      <div class="diary-card-body" id="body-${postId}">
        <h3 class="diary-title">${post.title}</h3>
        <div class="diary-text">${post.text}</div>

        ${photosHtml}

        <div class="diary-actions-row">
          <div class="interaction-group">
            <button class="action-btn ${isLiked ? 'liked' : ''}" data-action="like" data-id="${postId}" data-base="${baseLikes}" aria-label="Páči sa mi to">
              <svg class="heart-svg" width="16" height="16" viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span class="likes-counter">${initialDisplay}</span>
            </button>
            
            <button class="action-btn" data-action="share" data-id="${postId}" data-title="${post.title}" aria-label="Zdieľať príspevok">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              <span>Zdieľať</span>
            </button>
          </div>

          <a href="#requisitesSection" class="btn btn-primary btn-sm">
            <span>Podporiť deti</span>
          </a>
        </div>
      </div>
    `;

    feed.appendChild(card);

    fetchCloudLikes(postId, baseLikes);
  });

  // Delegovanie udalostí pre akordeón a interakcie
  feed.addEventListener("click", (e) => {
    // 1. Kliknutie na hornú zhrňujúcu lištu -> prepnutie akordeónu
    const summary = e.target.closest(".diary-card-summary");
    if (summary) {
      toggleAccordion(summary.closest(".diary-card"));
      return;
    }

    // 2. Kliknutie na fotografiu -> Lightbox
    const photoThumb = e.target.closest(".photo-thumb");
    if (photoThumb) {
      openLightbox(photoThumb.dataset.full, photoThumb.dataset.caption);
      return;
    }

    // 3. Kliknutie na lajk
    const likeBtn = e.target.closest('button[data-action="like"]');
    if (likeBtn) {
      handleCloudLikeClick(likeBtn);
      return;
    }

    // 4. Kliknutie na zdieľať
    const shareBtn = e.target.closest('button[data-action="share"]');
    if (shareBtn) {
      const postId = shareBtn.dataset.id;
      const title = shareBtn.dataset.title;
      openShareModal(getShareableUrl(postId), `Tatry pomáhajú deťom 2026: ${title}`);
      return;
    }
  });

  // Klávesová podpora (Enter a Medzerník)
  feed.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const summary = e.target.closest(".diary-card-summary");
      if (summary) {
        e.preventDefault();
        toggleAccordion(summary.closest(".diary-card"));
        return;
      }

      const photoThumb = e.target.closest(".photo-thumb");
      if (photoThumb) {
        e.preventDefault();
        openLightbox(photoThumb.dataset.full, photoThumb.dataset.caption);
      }
    }
  });
}

// Funkcia na plynulé prepínanie akordeónu
function toggleAccordion(targetCard) {
  if (!targetCard) return;

  const isCurrentlyExpanded = targetCard.classList.contains("expanded");

  // V režime klasického akordeónu zbalíme ostatné karty
  const allCards = document.querySelectorAll(".diary-card");
  allCards.forEach((card) => {
    if (card !== targetCard) {
      card.classList.remove("expanded");
      const sum = card.querySelector(".diary-card-summary");
      if (sum) {
        sum.setAttribute("aria-expanded", "false");
        const lbl = sum.querySelector(".diary-toggle-label");
        if (lbl) lbl.textContent = "Rozbaliť";
      }
    }
  });

  // Prepnutie cieľovej karty
  if (isCurrentlyExpanded) {
    targetCard.classList.remove("expanded");
    const sum = targetCard.querySelector(".diary-card-summary");
    if (sum) {
      sum.setAttribute("aria-expanded", "false");
      const lbl = sum.querySelector(".diary-toggle-label");
      if (lbl) lbl.textContent = "Rozbaliť";
    }
  } else {
    targetCard.classList.add("expanded");
    const sum = targetCard.querySelector(".diary-card-summary");
    if (sum) {
      sum.setAttribute("aria-expanded", "true");
      const lbl = sum.querySelector(".diary-toggle-label");
      if (lbl) lbl.textContent = "Zbaliť";
    }
  }
}

// Načítanie globálneho počtu lajkov z cloudu
async function fetchCloudLikes(postId, baseLikes) {
  try {
    const res = await fetch(`https://abacus.jasoncameron.dev/get/${CLOUD_COUNTER_NS}/${postId}`, {
      headers: { "Accept": "application/json" }
    });
    if (!res.ok) return;
    const data = await res.json();
    if (data && typeof data.value === "number") {
      const counterEl = document.querySelector(`button[data-id="${postId}"] .likes-counter`);
      if (counterEl) {
        counterEl.textContent = baseLikes + data.value;
      }
    }
  } catch (err) {}
}

// Spracovanie kliknutia na lajk
async function handleCloudLikeClick(btn) {
  const postId = btn.dataset.id;
  const baseLikes = parseInt(btn.dataset.base, 10) || 186;
  const likedKey = `liked_${postId}`;
  const counter = btn.querySelector(".likes-counter");
  const heartSvg = btn.querySelector(".heart-svg");
  let currentCount = parseInt(counter.textContent, 10) || baseLikes;

  const isLiked = localStorage.getItem(likedKey) === "true";

  if (isLiked) {
    showToast("Tento príspevok ste už podporili! Ďakujeme! ❤️");
    return;
  }

  localStorage.setItem(likedKey, "true");
  btn.classList.add("liked");
  if (heartSvg) heartSvg.setAttribute("fill", "currentColor");
  counter.textContent = currentCount + 1;
  showToast("Ďakujeme za vašu podporu! ❤️");

  try {
    const res = await fetch(`https://abacus.jasoncameron.dev/hit/${CLOUD_COUNTER_NS}/${postId}`);
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.value === "number") {
        counter.textContent = baseLikes + data.value;
      }
    }
  } catch (err) {}
}

// 6. Transparentný účet a podpora
function initRequisites(requisites) {
  const grid = document.getElementById("requisitesGrid");
  if (!grid || !requisites || !requisites.cards) return;

  grid.innerHTML = "";

  requisites.cards.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "requisite-card";

    let bodyHtml = "";
    let btnHtml = "";
    const cardIcon = ICONS[card.iconType] || ICONS.bank;

    if (card.type === "transparent") {
      bodyHtml = `
        <div class="req-box">
          <div class="req-label">Číslo transparentného účtu (IBAN)</div>
          <div class="req-value">${card.iban}</div>
          <div style="font-size: 0.85rem; color: #64748b; margin-top: 6px;">Banka: <b>${card.bank}</b></div>
          <div style="font-size: 0.85rem; color: #059669; margin-top: 4px;">✔ ${card.note}</div>
        </div>
      `;
      btnHtml = `
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <button class="btn btn-primary" style="width: 100%;" data-copy="${card.iban}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Skopírovať IBAN</span>
          </button>
          <a href="${card.linkUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="width: 100%; font-size: 0.88rem;">
            ${card.linkText}
          </a>
        </div>
      `;
    } else if (card.type === "portal") {
      bodyHtml = `
        <p style="color: #334155; margin-bottom: 20px; font-size: 0.95rem; line-height: 1.6;">
          ${card.desc}
        </p>
      `;
      btnHtml = `
        <a href="${card.linkUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
          <span>${card.linkText}</span>
        </a>
      `;
    } else if (card.type === "share") {
      bodyHtml = `
        <p style="color: #334155; margin-bottom: 20px; font-size: 0.95rem; line-height: 1.6;">
          ${card.desc}
        </p>
      `;
      btnHtml = `
        <button class="btn btn-outline" style="width: 100%;" id="mainShareBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          <span>Zdieľať projekt s priateľmi</span>
        </button>
      `;
    }

    cardEl.innerHTML = `
      <div>
        <div class="req-header">
          <div class="req-icon req-icon-${card.iconType || 'default'}">${cardIcon}</div>
          <h3 class="req-title">${card.title}</h3>
        </div>
        ${bodyHtml}
      </div>
      <div>
        ${btnHtml}
      </div>
    `;

    grid.appendChild(cardEl);
  });

  const mainShareBtn = document.getElementById("mainShareBtn");
  if (mainShareBtn) {
    mainShareBtn.addEventListener("click", () => {
      openShareModal(getShareableUrl(), "Tatry pomáhajú deťom 2026 — Charitatívny trek pre deti");
    });
  }
}

// 7. Bezpečné generovanie URL pre zdieľanie
function getShareableUrl(hashId = "") {
  let url = window.location.href;
  if (window.location.protocol === "file:") {
    url = "https://tatrypomahajudetom.sk";
  }
  if (hashId) {
    url = url.split("#")[0] + "#" + hashId;
  }
  return url;
}

// 8. Modálne okno Zdieľať (Share Modal)
function initShareModal() {
  const modal = document.getElementById("shareModal");
  const closeBtn = document.getElementById("shareCloseBtn");
  const copyBtn = document.getElementById("shareCopyLinkBtn");
  const input = document.getElementById("shareLinkInput");

  if (!modal) return;

  closeBtn.addEventListener("click", closeShareModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeShareModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeShareModal();
    }
  });

  if (copyBtn && input) {
    copyBtn.addEventListener("click", () => {
      copyToClipboard(input.value, "Odkaz bol skopírovaný do schránky!");
    });
  }
}

function openShareModal(url, title) {
  const modal = document.getElementById("shareModal");
  const input = document.getElementById("shareLinkInput");
  const fbBtn = document.getElementById("shareFbBtn");
  const tgBtn = document.getElementById("shareTgBtn");
  const waBtn = document.getElementById("shareWaBtn");

  if (!modal) return;

  const encUrl = encodeURIComponent(url);
  const encTitle = encodeURIComponent(title || "Tatry pomáhajú deťom 2026");

  if (input) input.value = url;
  if (fbBtn) fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${encUrl}`;
  if (tgBtn) tgBtn.href = `https://t.me/share/url?url=${encUrl}&text=${encTitle}`;
  if (waBtn) waBtn.href = `https://api.whatsapp.com/send?text=${encTitle}%20${encUrl}`;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeShareModal() {
  const modal = document.getElementById("shareModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// 9. Globálne tlačidlá kopírovania
function initGlobalCopyHandlers() {
  document.addEventListener("click", (e) => {
    const copyBtn = e.target.closest("button[data-copy]");
    if (copyBtn) {
      const text = copyBtn.dataset.copy;
      copyToClipboard(text, "IBAN bol skopírovaný do schránky!");
    }
  });
}

// 10. Lightbox pre zväčšenie obrázkov
function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxCloseBtn");

  if (!modal) return;

  closeBtn.addEventListener("click", closeLightbox);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeLightbox();
    }
  });
}

function openLightbox(url, caption) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");

  if (!modal || !img) return;

  img.src = url;
  cap.textContent = caption || "";
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// 11. Bezpečné kopírovanie do schránky
function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand("copy");
    if (successful) {
      showToast(successMessage);
    } else {
      showToast("Kopírovanie: označte a skopírujte text ručne");
    }
  } catch (err) {
    showToast("Kopírovanie: označte a skopírujte text ručne");
  }
  document.body.removeChild(textArea);
}

// 12. Toast správy
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toastMessage");
  const toastText = document.getElementById("toastText");
  if (!toast) return;

  if (toastText) toastText.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

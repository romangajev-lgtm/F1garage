import "@fontsource/inter/cyrillic-400.css";
import "@fontsource/inter/cyrillic-600.css";
import "@fontsource/inter/cyrillic-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/montserrat/cyrillic-700.css";
import "@fontsource/montserrat/cyrillic-800.css";
import "@fontsource/montserrat/cyrillic-900.css";
import "@fontsource/montserrat/latin-700.css";
import "@fontsource/montserrat/latin-800.css";
import "@fontsource/montserrat/latin-900.css";
import "@fontsource/noto-sans-georgian/georgian-400.css";
import "@fontsource/noto-sans-georgian/georgian-600.css";
import "@fontsource/noto-sans-georgian/georgian-700.css";
import "@fontsource/noto-sans-georgian/georgian-800.css";
import "@fontsource/noto-sans-georgian/georgian-900.css";
import "./styles.css";
import { company, gallery, navigation, services, socialLinks } from "./data.js";
import {
  getLanguage,
  localizeDocument,
  setLanguage,
  SUPPORTED_LANGUAGES,
  t,
} from "./i18n.js";
import { mountPixelRallyCars } from "./pixel-rally-car.js";

const app = document.querySelector("#app");
const externalAttributes = 'target="_blank" rel="noopener noreferrer"';

const keepShortWordsTogether = (value) => value.replace(
  /(^|[\s(])((?:в|и|к|с|у|о|а|но|на|по|за|из|от|до|во|со|ко))\s+/giu,
  "$1$2\u00a0",
);

const languageSwitcherMarkup = (id, modifier) => `
  <div class="language-switcher language-switcher--${modifier}" data-language-switcher>
    <button
      class="language-switcher__trigger"
      type="button"
      aria-haspopup="listbox"
      aria-expanded="false"
      aria-controls="${id}"
      aria-label="${t("language.label")}"
      data-language-trigger
      data-i18n-attr="aria-label:language.label"
    >
      <span data-language-current>${getLanguage().toUpperCase()}</span>
      <svg viewBox="0 0 12 8" aria-hidden="true">
        <path d="m1 1.5 5 5 5-5" />
      </svg>
    </button>
    <div
      class="language-switcher__menu"
      id="${id}"
      role="listbox"
      aria-label="${t("language.menuLabel")}"
      data-i18n-attr="aria-label:language.menuLabel"
      hidden
    >
      ${SUPPORTED_LANGUAGES.map((language) => `
        <button
          class="language-switcher__option"
          type="button"
          role="option"
          data-language-option="${language}"
          aria-selected="${String(language === getLanguage())}"
        >
          <span data-i18n="language.names.${language}">${t(`language.names.${language}`)}</span>
          <span class="language-switcher__marker" aria-hidden="true"></span>
        </button>
      `).join("")}
    </div>
    <span class="sr-only" data-language-status aria-live="polite" aria-atomic="true"></span>
  </div>
`;

const navigationMarkup = () => navigation.map((item) => `
  <a href="${item.href}" data-i18n="nav.${item.key}">${t(`nav.${item.key}`)}</a>
`).join("");

const serviceCards = services.map((service, serviceIndex) => `
  <article class="service-card reveal" id="${service.id}">
    <picture class="service-card__media">
      <source media="(max-width: 760px)" srcset="${service.mobileImage}" type="image/webp" />
      <img
        src="${service.image}"
        alt="${t(`services.cards.${serviceIndex}.alt`)}"
        data-i18n-attr="alt:services.cards.${serviceIndex}.alt"
        loading="lazy"
        decoding="async"
        width="${service.imageWidth}"
        height="${service.imageHeight}"
      />
    </picture>
    <div class="service-card__shade"></div>
    <div class="service-card__content">
      <span class="service-card__number">${service.number}</span>
      <h3 data-i18n="services.cards.${serviceIndex}.title">${t(`services.cards.${serviceIndex}.title`)}</h3>
      <p data-i18n="services.cards.${serviceIndex}.description">${t(`services.cards.${serviceIndex}.description`)}</p>
      <a href="#prices" class="text-link">
        <span class="text-link__label" data-i18n="services.viewPrices">${t("services.viewPrices")}</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </article>
`).join("");

const priceGroups = services.map((service, serviceIndex) => `
  <article class="price-group reveal">
    <div class="price-group__heading">
      <span>${service.number}</span>
      <h3 data-i18n="services.cards.${serviceIndex}.shortTitle">${t(`services.cards.${serviceIndex}.shortTitle`)}</h3>
    </div>
    <div class="price-list">
      ${Array.from({ length: service.itemCount }, (_, itemIndex) => `
        <div class="price-row">
          <span data-i18n="services.cards.${serviceIndex}.items.${itemIndex}.name">${t(`services.cards.${serviceIndex}.items.${itemIndex}.name`)}</span>
          <strong data-i18n="services.cards.${serviceIndex}.items.${itemIndex}.price">${t(`services.cards.${serviceIndex}.items.${itemIndex}.price`)}</strong>
        </div>
      `).join("")}
    </div>
  </article>
`).join("");

const galleryThumbnails = gallery.map((item, index) => {
  const title = t(`history.gallery.${index}.title`);
  return `
    <li>
      <button
        class="story-thumbnail"
        type="button"
        data-story-index="${index}"
        aria-current="${index === 0 ? "true" : "false"}"
        aria-label="${t("history.showPhoto", { current: index + 1, title })}"
      >
        <img src="${item.src}" alt="" loading="lazy" decoding="async" />
        <span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      </button>
    </li>
  `;
}).join("");

const interviewItems = t("history.interview").map((item, index) => `
  <li>
    <details>
      <summary>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong data-i18n="history.interview.${index}.question">${keepShortWordsTogether(item.question)}</strong>
      </summary>
      <div class="owner-interview__answer">
        <div>
          <p data-i18n="history.interview.${index}.answer">${keepShortWordsTogether(item.answer)}</p>
        </div>
      </div>
    </details>
  </li>
`).join("");

const socialItems = socialLinks.map((social) => `
  <a class="social-card" href="${social.href}" ${externalAttributes}>
    <span>${social.label}</span>
    <strong>${social.handle}</strong>
    <span aria-hidden="true">↗</span>
  </a>
`).join("");

const firstGalleryItem = {
  ...gallery[0],
  ...t("history.gallery.0"),
};

app.innerHTML = `
  <a class="skip-link" href="#main" data-i18n="a11y.skip">${t("a11y.skip")}</a>
  <header class="site-header" data-header>
    <div class="container header-inner">
      <a
        class="brand"
        href="#home"
        aria-label="${t("a11y.brandHome")}"
        data-i18n-attr="aria-label:a11y.brandHome"
      >
        <img
          src="/images/logo-white.png"
          alt="${t("a11y.logoAlt")}"
          data-i18n-attr="alt:a11y.logoAlt"
          width="2306"
          height="845"
        />
      </a>
      <nav
        class="desktop-nav"
        aria-label="${t("a11y.mainNav")}"
        data-i18n-attr="aria-label:a11y.mainNav"
      >
        ${navigationMarkup()}
      </nav>
      ${languageSwitcherMarkup("language-menu-desktop", "desktop")}
      <a class="header-phone" href="tel:${company.phone}">${company.phoneDisplay}</a>
      <button
        class="menu-toggle"
        type="button"
        aria-label="${t("a11y.openMenu")}"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav
      class="mobile-menu"
      id="mobile-menu"
      aria-label="${t("a11y.mobileNav")}"
      data-i18n-attr="aria-label:a11y.mobileNav"
      hidden
    >
      ${navigationMarkup()}
      <a href="tel:${company.phone}">${company.phoneDisplay}</a>
      <div class="mobile-menu__language">
        ${languageSwitcherMarkup("language-menu-mobile", "mobile")}
      </div>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="home" aria-labelledby="hero-title">
      <picture class="hero__media">
        <source media="(max-width: 760px)" srcset="/images/generated/hero-premium-auto-service-mobile.webp" type="image/webp" />
        <img
          class="hero__image"
          src="/images/generated/hero-premium-auto-service.webp"
          alt="${t("hero.imageAlt")}"
          data-i18n-attr="alt:hero.imageAlt"
          width="1672"
          height="941"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <div class="hero__overlay"></div>
      <div class="container hero__content">
        <p class="eyebrow"><span></span><span data-i18n="hero.eyebrow">${t("hero.eyebrow")}</span></p>
        <h1 id="hero-title">
          <span>GARAGE</span>
          <img
            class="hero-logo-mark"
            src="/images/Auto-batumi-F1-2.png"
            alt="${t("hero.titleMarkAlt")}"
            data-i18n-attr="alt:hero.titleMarkAlt"
            width="3000"
            height="3000"
            fetchpriority="high"
          />
        </h1>
        <h2 data-i18n="hero.subtitle">${t("hero.subtitle")}</h2>
        <p class="hero__lead" data-i18n="hero.lead">${t("hero.lead")}</p>
        <div class="hero__actions">
          <a class="button button--primary" href="#booking" data-i18n="hero.book">${t("hero.book")}</a>
          <a class="button button--outline" href="tel:${company.phone}" data-i18n="hero.call">${t("hero.call")}</a>
          <a class="button button--ghost" href="${company.whatsapp}" ${externalAttributes}>WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <a class="hero__location" href="${company.maps}" ${externalAttributes}>
        <span data-i18n="hero.addressLabel">${t("hero.addressLabel")}</span>
        <strong>${company.address}</strong>
      </a>
    </section>

    <section class="manifesto angled-section" id="about" aria-labelledby="about-title">
      <img
        class="manifesto__wheel wheel-reveal"
        src="/images/manifesto-wheel.webp"
        alt=""
        aria-hidden="true"
        width="1200"
        height="1200"
        decoding="async"
      />
      <div class="container manifesto__grid reveal">
        <div class="manifesto__intro">
          <p class="section-index" data-i18n="about.index">${t("about.index")}</p>
          <h2 class="about-title" id="about-title">
            <span class="about-title__line" data-i18n="about.titleLine1">${t("about.titleLine1")}</span>
            <span class="about-title__line" data-i18n="about.titleLine2">${t("about.titleLine2")}</span>
            <span class="about-title__line about-title__line--accent" data-i18n="about.titleLine3">${t("about.titleLine3")}</span>
          </h2>
        </div>
        <div class="manifesto__copy">
          <p data-i18n="about.paragraph1">${t("about.paragraph1")}</p>
          <p data-i18n="about.paragraph2">${t("about.paragraph2")}</p>
        </div>
      </div>
    </section>

    <section class="services section-dark" id="services" aria-labelledby="services-title">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="section-index" data-i18n="services.index">${t("services.index")}</p>
            <h2 id="services-title"><span data-i18n="services.heading">${t("services.heading")}</span> GARAGE F1</h2>
          </div>
          <a class="button button--outline" href="#booking" data-i18n="services.book">${t("services.book")}</a>
        </div>
        <div class="services-grid">${serviceCards}</div>
      </div>
    </section>

    <section class="prices angled-section angled-section--red" id="prices" aria-labelledby="prices-title">
      <img
        class="prices__gloves"
        src="/images/prices-gloves-cutout.webp"
        alt=""
        aria-hidden="true"
        width="1254"
        height="1254"
        loading="lazy"
        decoding="async"
      />
      <div class="container">
        <div class="section-heading section-heading--dark reveal">
          <div>
            <p class="section-index" data-i18n="prices.index">${t("prices.index")}</p>
            <h2 id="prices-title" data-i18n="prices.title">${t("prices.title")}</h2>
          </div>
          <p class="price-note" data-i18n="prices.note">${t("prices.note")}</p>
        </div>
        <div class="prices-grid">${priceGroups}</div>
      </div>
    </section>

    <section class="gallery section-dark" id="gallery" aria-labelledby="gallery-title">
      <div class="container">
        <div class="section-heading story-heading reveal">
          <div>
            <p class="section-index" data-i18n="history.index">${t("history.index")}</p>
            <h2 id="gallery-title">
              <span class="story-heading__line" data-i18n="history.titleLine1">${t("history.titleLine1")}</span>
              <span class="story-heading__line"><span data-i18n="history.titleLine2">${t("history.titleLine2")}</span> <span class="story-heading__brand">GARAGE F1</span></span>
            </h2>
          </div>
          <p class="section-note" data-i18n="history.description">${t("history.description")}</p>
        </div>

        <div class="story-slider" data-story-slider data-story-view="archive">
          <div class="story-slider__toolbar">
            <div
              class="story-slider__nav"
              role="tablist"
              aria-label="${t("history.tabsLabel")}"
              data-i18n-attr="aria-label:history.tabsLabel"
            >
              <button
                class="story-slider__tab"
                id="story-archive-tab"
                type="button"
                role="tab"
                data-story-view-target="archive"
                aria-selected="true"
                aria-controls="story-archive-panel"
                data-i18n="history.photoArchive"
              >${t("history.photoArchive")}</button>
              <button
                class="story-slider__tab"
                id="story-interview-tab"
                type="button"
                role="tab"
                data-story-view-target="interview"
                aria-selected="false"
                aria-controls="story-interview-panel"
                data-i18n="history.whyUs"
              >${t("history.whyUs")}</button>
            </div>
            <button
              class="pixel-rally"
              type="button"
              data-pixel-rally
              data-motion-label="${t("history.pixelCarLabel")}"
              data-static-label="${t("history.pixelCarStaticLabel")}"
              aria-label="${t("history.pixelCarLabel")}"
              title="${t("history.pixelCarTitle")}"
              data-i18n-attr="data-motion-label:history.pixelCarLabel|data-static-label:history.pixelCarStaticLabel|aria-label:history.pixelCarLabel|title:history.pixelCarTitle"
            >
              <canvas class="pixel-rally__canvas" width="256" height="45" aria-hidden="true"></canvas>
            </button>
          </div>
          <div class="story-slider__viewport" data-story-slider-viewport>
            <div class="story-slider__track" data-story-slider-track>
              <section
                class="story-slider__panel story-slider__panel--archive"
                id="story-archive-panel"
                role="tabpanel"
                aria-labelledby="story-archive-tab"
              >
                <div
                  class="story-carousel reveal"
                  role="region"
                  aria-roledescription="${t("history.carouselRole")}"
                  aria-label="${t("history.carouselLabel")}"
                  data-i18n-attr="aria-roledescription:history.carouselRole|aria-label:history.carouselLabel"
                  tabindex="0"
                >
                  <div class="story-carousel__stage">
                    <div class="story-visual">
                      <img class="story-visual__backdrop" src="${firstGalleryItem.src}" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                      <img class="story-visual__image" src="${firstGalleryItem.src}" alt="${firstGalleryItem.alt}" loading="lazy" decoding="async" />
                    </div>

                    <article class="story-copy" aria-labelledby="story-title">
                      <p class="story-copy__eyebrow">
                        <span data-story-chapter>${keepShortWordsTogether(firstGalleryItem.chapter)}</span>
                        / <span data-i18n="history.personalArchive">${t("history.personalArchive")}</span>
                      </p>
                      <h3 id="story-title" data-story-title>${keepShortWordsTogether(firstGalleryItem.title)}</h3>
                      <p data-story-caption>${keepShortWordsTogether(firstGalleryItem.caption)}</p>
                      <div class="story-controls">
                        <button
                          type="button"
                          data-story-prev
                          aria-label="${t("history.previousPhoto")}"
                          data-i18n-attr="aria-label:history.previousPhoto"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 12H5M11 6l-6 6 6 6" />
                          </svg>
                        </button>
                        <p class="story-counter"><strong data-story-current>01</strong><span aria-hidden="true"> / </span><span>${String(gallery.length).padStart(2, "0")}</span></p>
                        <button
                          type="button"
                          data-story-next
                          aria-label="${t("history.nextPhoto")}"
                          data-i18n-attr="aria-label:history.nextPhoto"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </button>
                      </div>
                      <div
                        class="story-progress"
                        role="progressbar"
                        aria-label="${t("history.progress")}"
                        data-i18n-attr="aria-label:history.progress"
                        aria-valuemin="1"
                        aria-valuemax="${gallery.length}"
                        aria-valuenow="1"
                        aria-valuetext="${t("history.photoCount", { current: 1, total: gallery.length })}"
                      ><span></span></div>
                    </article>
                  </div>

                  <ol
                    class="story-thumbnails"
                    aria-label="${t("history.allPhotos")}"
                    data-i18n-attr="aria-label:history.allPhotos"
                  >
                    ${galleryThumbnails}
                  </ol>
                  <p class="sr-only" data-story-status aria-live="polite" aria-atomic="true"></p>
                </div>
              </section>
              <section
                class="story-slider__panel story-slider__panel--interview"
                id="story-interview-panel"
                role="tabpanel"
                aria-labelledby="story-interview-tab"
                aria-hidden="true"
                inert
              >
                <article class="story-blog-placeholder story-interview reveal" aria-labelledby="owner-blog-title">
                  <div class="story-interview__intro">
                    <p class="section-index" data-i18n="history.interviewIndex">${t("history.interviewIndex")}</p>
                    <h3 id="owner-blog-title" data-i18n="history.interviewTitle">${t("history.interviewTitle")}</h3>
                    <p data-i18n="history.interviewLead">${t("history.interviewLead")}</p>
                  </div>
                  <ol
                    class="owner-interview"
                    aria-label="${t("history.interviewLabel")}"
                    data-i18n-attr="aria-label:history.interviewLabel"
                  >
                    ${interviewItems}
                  </ol>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contacts" id="contacts" aria-labelledby="contacts-title">
      <div class="container contacts-grid">
        <div class="contacts__info reveal">
          <p class="section-index" data-i18n="contacts.index">${t("contacts.index")}</p>
          <h2 id="contacts-title">
            <span class="contacts-title__plain" data-i18n="contacts.title">${t("contacts.title")}</span><br />
            <span class="contacts-title__plain contacts-title__connector" data-i18n="contacts.titleWith">${t("contacts.titleWith")}</span>
            <span class="contacts-title__brand">GARAGE F1</span>
          </h2>
          <div class="contacts__details">
            <div>
              <span data-i18n="contacts.hoursLabel">${t("contacts.hoursLabel")}</span>
              <strong data-i18n="contacts.hours">${t("contacts.hours")}</strong>
            </div>
            <div>
              <span data-i18n="contacts.addressLabel">${t("contacts.addressLabel")}</span>
              <strong>${company.address}</strong>
            </div>
          </div>
          <div class="contact-actions">
            <a class="button button--dark" href="${company.maps}" ${externalAttributes} data-i18n="contacts.route">${t("contacts.route")}</a>
            <a class="button button--light" href="${company.whatsapp}" ${externalAttributes} data-i18n="contacts.whatsapp">${t("contacts.whatsapp")}</a>
          </div>
          <div
            class="socials"
            aria-label="${t("a11y.socialNetworks")}"
            data-i18n-attr="aria-label:a11y.socialNetworks"
          >${socialItems}</div>
        </div>

        <aside class="booking-card info-card reveal" id="booking" aria-labelledby="booking-title">
          <p class="section-index" data-i18n="contacts.bookingIndex">${t("contacts.bookingIndex")}</p>
          <h2 id="booking-title" data-i18n="contacts.bookingTitle">${t("contacts.bookingTitle")}</h2>
          <p data-i18n="contacts.bookingLead">${t("contacts.bookingLead")}</p>
          <ol class="booking-steps">
            ${t("contacts.steps").map((step, index) => `
              <li>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong data-i18n="contacts.steps.${index}.title">${step.title}</strong>
                  <p data-i18n="contacts.steps.${index}.text">${step.text}</p>
                </div>
              </li>
            `).join("")}
          </ol>
          <div class="info-card__actions">
            <a class="button button--primary" href="${company.whatsapp}" ${externalAttributes} data-i18n="contacts.whatsapp">${t("contacts.whatsapp")}</a>
            <a class="button button--outline" href="tel:${company.phone}" data-i18n="contacts.call">${t("contacts.call")}</a>
          </div>
        </aside>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-main">
      <a
        class="brand brand--footer"
        href="#home"
        aria-label="${t("a11y.brandTop")}"
        data-i18n-attr="aria-label:a11y.brandTop"
      >
        <img
          src="/images/logo-white.png"
          alt="${t("a11y.logoAlt")}"
          data-i18n-attr="alt:a11y.logoAlt"
          width="2306"
          height="845"
          loading="lazy"
        />
      </a>
      <nav
        aria-label="${t("a11y.footerNav")}"
        data-i18n-attr="aria-label:a11y.footerNav"
      >
        ${navigationMarkup()}
      </nav>
      <a class="footer-phone" href="tel:${company.phone}">${company.phoneDisplay}</a>
    </div>
    <div class="container footer-bottom">
      <span>© ${new Date().getFullYear()} GARAGE F1</span>
      <span>${company.address}</span>
    </div>
  </footer>

  <nav
    class="mobile-actions"
    aria-label="${t("a11y.quickActions")}"
    data-i18n-attr="aria-label:a11y.quickActions"
  >
    <a href="tel:${company.phone}" data-i18n="mobileActions.call">${t("mobileActions.call")}</a>
    <a href="#booking" data-i18n="mobileActions.book">${t("mobileActions.book")}</a>
    <a href="${company.maps}" ${externalAttributes} data-i18n="mobileActions.route">${t("mobileActions.route")}</a>
  </nav>
`;

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", t(open ? "a11y.closeMenu" : "a11y.openMenu"));
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
}

menuToggle.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

const languageSwitchers = [...document.querySelectorAll("[data-language-switcher]")].map((root) => ({
  root,
  trigger: root.querySelector("[data-language-trigger]"),
  menu: root.querySelector('[role="listbox"]'),
  options: [...root.querySelectorAll("[data-language-option]")],
  status: root.querySelector("[data-language-status]"),
}));

function closeLanguageSwitcher(switcher, { restoreFocus = false } = {}) {
  switcher.trigger.setAttribute("aria-expanded", "false");
  switcher.menu.hidden = true;
  if (restoreFocus) switcher.trigger.focus({ preventScroll: true });
}

function closeAllLanguageSwitchers(exception = null) {
  languageSwitchers.forEach((switcher) => {
    if (switcher !== exception) closeLanguageSwitcher(switcher);
  });
}

function openLanguageSwitcher(switcher, { focusOption = true } = {}) {
  closeAllLanguageSwitchers(switcher);
  switcher.trigger.setAttribute("aria-expanded", "true");
  switcher.menu.hidden = false;

  if (focusOption) {
    const selectedOption = switcher.options.find((option) => option.getAttribute("aria-selected") === "true");
    (selectedOption ?? switcher.options[0])?.focus({ preventScroll: true });
  }
}

function syncLanguageSwitchers({ announce = false } = {}) {
  const language = getLanguage();

  languageSwitchers.forEach((switcher) => {
    switcher.root.querySelector("[data-language-current]").textContent = language.toUpperCase();
    switcher.options.forEach((option) => {
      option.setAttribute("aria-selected", String(option.dataset.languageOption === language));
    });

    if (announce) {
      switcher.status.textContent = "";
      requestAnimationFrame(() => {
        switcher.status.textContent = t("language.changed", {
          language: t(`language.names.${language}`),
        });
      });
    }
  });
}

function chooseLanguage(switcher, language) {
  const changed = setLanguage(language);
  closeLanguageSwitcher(switcher, { restoreFocus: true });

  if (!changed) {
    syncLanguageSwitchers({ announce: true });
  }
}

languageSwitchers.forEach((switcher) => {
  switcher.trigger.addEventListener("click", () => {
    const open = switcher.trigger.getAttribute("aria-expanded") === "true";
    if (open) {
      closeLanguageSwitcher(switcher);
    } else {
      openLanguageSwitcher(switcher, { focusOption: false });
    }
  });

  switcher.trigger.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    openLanguageSwitcher(switcher);
    const selectedIndex = Math.max(
      0,
      switcher.options.findIndex((option) => option.getAttribute("aria-selected") === "true"),
    );
    const nextIndex = event.key === "ArrowUp"
      ? (selectedIndex - 1 + switcher.options.length) % switcher.options.length
      : selectedIndex;
    switcher.options[nextIndex]?.focus({ preventScroll: true });
  });

  switcher.options.forEach((option, index) => {
    option.addEventListener("click", () => chooseLanguage(switcher, option.dataset.languageOption));
    option.addEventListener("keydown", (event) => {
      const actions = {
        ArrowDown: () => switcher.options[(index + 1) % switcher.options.length],
        ArrowUp: () => switcher.options[(index - 1 + switcher.options.length) % switcher.options.length],
        Home: () => switcher.options[0],
        End: () => switcher.options.at(-1),
      };

      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeLanguageSwitcher(switcher, { restoreFocus: true });
        return;
      }

      if (!actions[event.key]) return;
      event.preventDefault();
      actions[event.key]()?.focus({ preventScroll: true });
    });
  });
});

document.addEventListener("pointerdown", (event) => {
  languageSwitchers.forEach((switcher) => {
    if (!switcher.root.contains(event.target)) closeLanguageSwitcher(switcher);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  const openSwitcher = languageSwitchers.find(
    (switcher) => switcher.trigger.getAttribute("aria-expanded") === "true",
  );
  if (openSwitcher) {
    closeLanguageSwitcher(openSwitcher, { restoreFocus: true });
    return;
  }

  if (menuToggle.getAttribute("aria-expanded") === "true") setMenu(false);
});

const storySlider = document.querySelector("[data-story-slider]");
const storySliderViewport = storySlider.querySelector("[data-story-slider-viewport]");
const storyViewTabs = [...storySlider.querySelectorAll("[role=tab]")];
const storyViewTargets = [...storySlider.querySelectorAll("[data-story-view-target]")];
const storyViewPanels = [...storySlider.querySelectorAll("[role=tabpanel]")];

function syncStorySliderHeight() {
  const activePanel = storyViewPanels.find((panel) => (
    panel.id === (storySlider.dataset.storyView === "interview"
      ? "story-interview-panel"
      : "story-archive-panel")
  ));
  if (activePanel) storySliderViewport.style.height = `${activePanel.offsetHeight}px`;
}

function setStoryView(view, { focus = true } = {}) {
  const nextView = view === "interview" ? "interview" : "archive";
  const activePanelId = nextView === "interview" ? "story-interview-panel" : "story-archive-panel";
  storySlider.dataset.storyView = nextView;
  storySliderViewport.scrollLeft = 0;
  storyViewTabs.forEach((tab) => tab.setAttribute("aria-selected", String(tab.dataset.storyViewTarget === nextView)));
  storyViewPanels.forEach((panel) => {
    const inactive = panel.id !== activePanelId;
    panel.setAttribute("aria-hidden", String(inactive));
    panel.toggleAttribute("inert", inactive);
    if ("inert" in panel) panel.inert = inactive;
  });
  requestAnimationFrame(syncStorySliderHeight);
  if (focus) storyViewTabs.find((tab) => tab.dataset.storyViewTarget === nextView)?.focus({ preventScroll: true });
}

storyViewTargets.forEach((trigger) => {
  trigger.addEventListener("click", () => setStoryView(trigger.dataset.storyViewTarget));
});

storyViewTabs.forEach((tab, index) => {
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "ArrowRight"
      ? (index + 1) % storyViewTabs.length
      : (index - 1 + storyViewTabs.length) % storyViewTabs.length;
    const nextTab = storyViewTabs[nextIndex];
    setStoryView(nextTab.dataset.storyViewTarget);
  });
});

if (window.location.hash === "#owner-blog") {
  window.history.replaceState(
    window.history.state,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
}

setStoryView("archive", { focus: false });
window.addEventListener("load", syncStorySliderHeight, { once: true });
window.addEventListener("resize", syncStorySliderHeight);
if ("ResizeObserver" in window) {
  const storySliderObserver = new ResizeObserver(syncStorySliderHeight);
  storyViewPanels.forEach((panel) => storySliderObserver.observe(panel));
}

const storyCarousel = document.querySelector(".story-carousel");
const storyVisual = storyCarousel.querySelector(".story-visual");
let storyImage = storyCarousel.querySelector(".story-visual__image");
const storyBackdrop = storyCarousel.querySelector(".story-visual__backdrop");
const storyChapter = storyCarousel.querySelector("[data-story-chapter]");
const storyTitle = storyCarousel.querySelector("[data-story-title]");
const storyCaption = storyCarousel.querySelector("[data-story-caption]");
const storyCurrent = storyCarousel.querySelector("[data-story-current]");
const storyProgress = storyCarousel.querySelector(".story-progress");
const storyStatus = storyCarousel.querySelector("[data-story-status]");
const storyThumbnails = storyCarousel.querySelector(".story-thumbnails");
const storyThumbnailButtons = [...storyCarousel.querySelectorAll("[data-story-index]")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let activeStoryIndex = 0;
let storyTransitionToken = 0;
let swipeStart = null;

function getGalleryItem(index) {
  return {
    ...gallery[index],
    ...t(`history.gallery.${index}`),
  };
}

function normalizeGalleryIndex(index) {
  return (index + gallery.length) % gallery.length;
}

function transitionStoryImage(item) {
  storyTransitionToken += 1;
  const transitionToken = storyTransitionToken;

  if (prefersReducedMotion.matches) {
    storyImage.src = item.src;
    storyImage.alt = item.alt;
    storyBackdrop.src = item.src;
    return;
  }

  const previousImage = storyImage;
  const incomingImage = previousImage.cloneNode();
  incomingImage.className = "story-visual__image story-visual__image--incoming";
  incomingImage.src = item.src;
  incomingImage.alt = item.alt;
  storyVisual.append(incomingImage);

  const revealIncomingImage = () => {
    if (transitionToken !== storyTransitionToken) {
      incomingImage.remove();
      return;
    }

    storyBackdrop.src = item.src;
    previousImage.classList.add("is-leaving");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => incomingImage.classList.add("is-visible"));
    });

    let transitionFinished = false;
    const finishTransition = () => {
      if (transitionFinished) return;
      transitionFinished = true;

      if (transitionToken !== storyTransitionToken) {
        incomingImage.remove();
        return;
      }

      previousImage.remove();
      incomingImage.classList.remove("story-visual__image--incoming", "is-visible");
      storyImage = incomingImage;
    };

    incomingImage.addEventListener("transitionend", finishTransition, { once: true });
    window.setTimeout(finishTransition, 700);
  };

  if (incomingImage.complete) {
    revealIncomingImage();
  } else {
    incomingImage.addEventListener("load", revealIncomingImage, { once: true });
    incomingImage.addEventListener("error", revealIncomingImage, { once: true });
  }
}

function refreshStoryTranslations() {
  const item = getGalleryItem(activeStoryIndex);
  const currentNumber = activeStoryIndex + 1;

  storyVisual.querySelectorAll(".story-visual__image").forEach((image) => {
    image.alt = item.alt;
  });
  storyChapter.textContent = keepShortWordsTogether(item.chapter);
  storyTitle.textContent = keepShortWordsTogether(item.title);
  storyCaption.textContent = keepShortWordsTogether(item.caption);
  storyProgress.setAttribute("aria-valuetext", t("history.photoCount", {
    current: currentNumber,
    total: gallery.length,
  }));

  storyThumbnailButtons.forEach((button, index) => {
    button.setAttribute("aria-label", t("history.showPhoto", {
      current: index + 1,
      title: t(`history.gallery.${index}.title`),
    }));
  });
}

function showStoryImage(index, { announce = true } = {}) {
  activeStoryIndex = normalizeGalleryIndex(index);
  const item = getGalleryItem(activeStoryIndex);
  const currentNumber = activeStoryIndex + 1;
  const activeThumbnail = storyThumbnailButtons[activeStoryIndex];

  transitionStoryImage(item);
  storyChapter.textContent = keepShortWordsTogether(item.chapter);
  storyTitle.textContent = keepShortWordsTogether(item.title);
  storyCaption.textContent = keepShortWordsTogether(item.caption);
  storyCurrent.textContent = String(currentNumber).padStart(2, "0");

  storyProgress.style.setProperty("--story-progress", `${(currentNumber / gallery.length) * 100}%`);
  storyProgress.setAttribute("aria-valuenow", String(currentNumber));
  storyProgress.setAttribute("aria-valuetext", t("history.photoCount", {
    current: currentNumber,
    total: gallery.length,
  }));

  storyThumbnailButtons.forEach((button, buttonIndex) => {
    button.setAttribute("aria-current", String(buttonIndex === activeStoryIndex));
  });

  const targetScroll = activeThumbnail.offsetLeft
    - (storyThumbnails.clientWidth - activeThumbnail.offsetWidth) / 2;
  storyThumbnails.scrollTo({
    left: targetScroll,
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
  });

  if (announce) {
    storyStatus.textContent = t("history.announcement", {
      current: currentNumber,
      total: gallery.length,
      chapter: item.chapter,
      title: item.title,
    });
  }
}

storyCarousel.querySelector("[data-story-prev]").addEventListener("click", () => showStoryImage(activeStoryIndex - 1));
storyCarousel.querySelector("[data-story-next]").addEventListener("click", () => showStoryImage(activeStoryIndex + 1));

storyThumbnailButtons.forEach((button) => {
  button.addEventListener("click", () => showStoryImage(Number(button.dataset.storyIndex)));
});

storyCarousel.addEventListener("keydown", (event) => {
  const actions = {
    ArrowLeft: () => showStoryImage(activeStoryIndex - 1),
    ArrowRight: () => showStoryImage(activeStoryIndex + 1),
    Home: () => showStoryImage(0),
    End: () => showStoryImage(gallery.length - 1),
  };
  if (!actions[event.key]) return;
  event.preventDefault();
  actions[event.key]();
});

storyVisual.addEventListener("pointerdown", (event) => {
  if (!event.isPrimary) return;
  swipeStart = { x: event.clientX, y: event.clientY };
});

storyVisual.addEventListener("pointerup", (event) => {
  if (!swipeStart || !event.isPrimary) return;
  const deltaX = event.clientX - swipeStart.x;
  const deltaY = event.clientY - swipeStart.y;
  swipeStart = null;
  if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  showStoryImage(activeStoryIndex + (deltaX < 0 ? 1 : -1));
});

storyVisual.addEventListener("pointercancel", () => {
  swipeStart = null;
});

storyVisual.addEventListener("dragstart", (event) => event.preventDefault());

const interviewDetails = [...document.querySelectorAll(".owner-interview details")];

async function animateInterviewDetails(details, expand) {
  if (details.dataset.animating === "true") return;

  const answer = details.querySelector(".owner-interview__answer");
  if (!answer) return;

  if (prefersReducedMotion.matches || typeof answer.animate !== "function") {
    details.open = expand;
    return;
  }

  details.dataset.animating = "true";
  if (expand) details.open = true;

  const startHeight = expand ? 0 : answer.getBoundingClientRect().height;
  const endHeight = expand ? answer.scrollHeight : 0;
  const animation = answer.animate(
    [
      {
        height: `${startHeight}px`,
        opacity: expand ? 0 : 1,
        transform: expand ? "translateY(-0.45rem)" : "translateY(0)",
      },
      {
        height: `${endHeight}px`,
        opacity: expand ? 1 : 0,
        transform: expand ? "translateY(0)" : "translateY(-0.45rem)",
      },
    ],
    {
      duration: expand ? 440 : 340,
      easing: "cubic-bezier(.22, .61, .36, 1)",
      fill: "both",
    },
  );

  try {
    await animation.finished;
  } catch {
    delete details.dataset.animating;
    return;
  }

  if (!expand) details.open = false;
  animation.cancel();
  delete details.dataset.animating;
}

interviewDetails.forEach((details) => {
  const summary = details.querySelector("summary");
  summary.addEventListener("click", (event) => {
    event.preventDefault();
    animateInterviewDetails(details, !details.open);
  });
});

document.addEventListener("languagechange", () => {
  localizeDocument(app);
  setMenu(menuToggle.getAttribute("aria-expanded") === "true");
  refreshStoryTranslations();
  syncLanguageSwitchers({ announce: true });
  requestAnimationFrame(syncStorySliderHeight);
});

mountPixelRallyCars();
syncLanguageSwitchers();
refreshStoryTranslations();

if (!prefersReducedMotion.matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("has-motion");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
  document.querySelectorAll(".reveal, .wheel-reveal").forEach((element) => observer.observe(element));
}

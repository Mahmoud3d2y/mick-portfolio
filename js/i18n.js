/* ==========================================================================
   Mikael Abuye — Aircraft Cleaning Specialist
   Translations (English / French)

   How it works
   - English lives in index.html (it's what search engines read).
   - Elements marked data-i18n="key" get their content from FR[key] in French
     and switch back to the original HTML in English.
   - data-i18n-attr="alt:key|aria-label:key2" does the same for attributes.
   - STRINGS holds text that JavaScript writes (form errors, button labels).

   To change a French text: edit it in FR below.
   To add a new translated text: put data-i18n="my.key" on the element in
   index.html and add "my.key": "…" to FR.

   French typography:   is a non-breaking space (used before ? ! : ;).
   ========================================================================== */

/* -------- French versions of the page text -------- */
const FR = {
  // Page title and description (for the browser tab and search results)
  "meta.title": "Mikael Abuye — Spécialiste du nettoyage d’avions | Extérieur, cabine et detailing",
  "meta.description": "Mikael Abuye, spécialiste du nettoyage d’avions : lavage extérieur, nettoyage de cabine, nettoyage en profondeur et detailing selon les normes de sécurité aéronautiques.",

  role: "Spécialiste du nettoyage d’avions",

  // Navigation
  "nav.label": "Navigation principale",
  "nav.logo": "Mikael Abuye, retour en haut",
  "nav.about": "À propos",
  "nav.services": "Services",
  "nav.results": "Résultats",
  "nav.experience": "Expérience",
  "nav.gallery": "Galerie",
  "nav.contact": "Contact",

  // Hero
  "hero.title": "Chaque avion,<br><span>impeccable et prêt à décoller.</span>",
  "hero.sub": "Lavage extérieur, nettoyage de cabine et detailing réalisés selon les normes de sécurité aéronautiques, avec précision sur chaque panneau et à l’heure pour chaque départ.",
  "hero.quote": "Demander un devis",
  "hero.scroll": "Aller au contenu",

  // Values strip
  "values.label": "Valeurs",
  "values.safety": "La sécurité avant tout",
  "values.detail": "Souci du détail",
  "values.ontime": "Ponctualité",
  "values.standards": "Normes du secteur",
  "values.precision": "Nettoyage de précision",
  "values.pro": "Professionnalisme",

  // About
  "about.photoAlt": "Portrait de Mikael Abuye, souriant",
  "about.kicker": "À propos de Mikael",
  "about.title": "Un avion propre est un avion sûr.",
  "about.p1": "Je suis Mikael Abuye, ou Mick, spécialiste du nettoyage d’avions. Mon travail consiste à faire en sorte que chaque appareil sur lequel j’interviens soit impeccable et réponde aux normes de sécurité et de qualité exigées par l’aviation, du fuselage et des ailes jusqu’à chaque siège, office et toilette de la cabine.",
  "about.p2": "Je travaille avec méthode, je respecte à la lettre les procédures de sécurité côté piste et je traite chaque avion comme si les passagers embarquaient dans l’heure, car c’est souvent le cas.",
  "stats.label": "Chiffres clés",
  "stats.years": "Années d’expérience",
  "stats.aircraft": "Avions nettoyés",
  "stats.safety": "Conformité sécurité",
  "stats.ontime": "Rotations à l’heure",

  // Services
  "services.kicker": "Services",
  "services.title": "Un soin complet, du nez à la queue.",
  "s1.title": "Nettoyage extérieur d’avions",
  "s1.desc": "Fuselage, ailes, empennage et train d’atterrissage lavés avec des produits homologués pour éliminer saleté, résidus d’échappement et insectes, sans abîmer la peinture ni les capteurs.",
  "s2.title": "Nettoyage de cabine",
  "s2.desc": "Nettoyages de cabine en escale et de nuit : sièges, tablettes, moquettes, offices, toilettes et coffres à bagages, prêts pour le prochain embarquement.",
  "s3.title": "Nettoyage en profondeur",
  "s3.desc": "Nettoyages approfondis et désinfection programmés qui atteignent les zones cachées : rails de sièges, panneaux latéraux, bouches d’aération et surfaces fréquemment touchées.",
  "s4.title": "Detailing",
  "s4.desc": "Polissage, chromes, entretien du cuir et finitions qui redonnent un aspect neuf aux jets d’affaires et aux intérieurs VIP.",
  "s5.title": "Procédures de sécurité",
  "s5.desc": "Respect strict des règles côté piste, des EPI, de la manipulation des produits chimiques et des consignes constructeur, pour un travail sûr qui ne met jamais l’appareil en danger.",

  // Before / after
  "results.kicker": "Résultats",
  "results.title": "Voyez la différence.",
  "results.sub": "Faites glisser la poignée, ou utilisez les flèches du clavier, pour comparer avant et après.",
  "results.beforeAlt": "Surface d’avion avant nettoyage",
  "results.afterAlt": "La même surface d’avion après nettoyage",
  "results.before": "Avant",
  "results.after": "Après",
  "results.range": "Comparaison avant/après : faites glisser pour révéler la surface nettoyée",

  // Experience & certifications
  "exp.kicker": "Expérience",
  "exp.title": "Mon parcours.",
  "exp.org": "Nom de l’entreprise · Aéroport",
  "exp.job1.date": "20XX – Aujourd’hui",
  "exp.job1.desc": "Nettoyage extérieur et de cabine d’avions commerciaux, contrôles qualité avant remise de l’appareil et formation des nouveaux membres de l’équipe aux procédures de sécurité.",
  "exp.job2.title": "Agent de nettoyage cabine",
  "exp.job2.desc": "Nettoyage de cabine en escale et de nuit selon les standards des compagnies, dans des temps d’escale serrés.",
  "certs.kicker": "Certifications",
  "certs.title": "Formé selon les normes.",
  "certs.c1": "Sensibilisation à la sécurité côté piste",
  "certs.c2": "Manipulation des matières dangereuses",
  "certs.c3": "Sensibilisation à la sûreté aéroportuaire",
  "certs.c4": "Secourisme au travail",
  "certs.issuer": "Organisme · Année",

  // Work process
  "process.kicker": "Méthode de travail",
  "process.title": "Quatre étapes, aucun raccourci.",
  "p1.title": "Inspection",
  "p1.desc": "Tour de l’appareil pour évaluer son état, noter les dommages et les zones sensibles, et planifier le nettoyage.",
  "p2.title": "Nettoyage",
  "p2.desc": "Nettoyage méthodique avec des produits et des techniques homologués, dans le respect de chaque procédure de sécurité.",
  "p3.title": "Contrôle qualité",
  "p3.desc": "Inspection détaillée selon une liste de contrôle. Tout ce qui n’est pas conforme est refait sur place.",
  "p4.title": "Livraison",
  "p4.desc": "Appareil remis propre, documenté et dans les délais, prêt pour le prochain vol.",

  // Gallery
  "gallery.kicker": "Galerie",
  "gallery.title": "Le travail en détail.",
  "gallery.viewer": "Visionneuse de photos",
  "gallery.close": "Fermer",
  "gallery.g1": "Lavage extérieur",
  "gallery.g2": "Cabine en escale",
  "gallery.g3": "Détail du capot moteur",
  "gallery.g4": "Nettoyage approfondi de l’office",
  "gallery.g5": "Detailing d’un jet d’affaires",
  "gallery.g6": "Contrôle qualité final",

  // Testimonials
  "testi.kicker": "Témoignages",
  "testi.title": "Ce qu’on dit de mon travail.",
  "testi.q1": "« Ajoutez ici un vrai témoignage, par exemple d’un responsable sur votre fiabilité et votre souci du détail. »",
  "testi.q2": "« Ajoutez ici un deuxième témoignage, par exemple d’un collègue sur le travail d’équipe et la sécurité. »",
  "testi.q3": "« Ajoutez ici un troisième témoignage, par exemple d’un client sur la qualité des finitions. »",
  "testi.name": "Prénom Nom",
  "testi.role": "Poste, Entreprise",

  // Contact
  "contact.kicker": "Contact",
  "contact.title": "Prêt pour le départ ?",
  "contact.intro": "Parlez-moi de votre appareil et de votre planning, et je reviendrai vers vous avec mes disponibilités et un devis.",
  "contact.location": "Ville, Pays · Disponible pour se déplacer",
  "form.name": "Nom",
  "form.email": "E-mail",
  "form.service": "Service",
  "form.message": "Message",
  "form.other": "Autre / je ne sais pas",
  "form.send": "Envoyer le message",

  // Footer
  "footer.credit": "Conçu et développé par <a href=\"https://github.com/Mahmoud3d2y\" target=\"_blank\" rel=\"noopener\">Mahmoud Saadaoui</a> · Photo d’en-tête via <a href=\"https://unsplash.com\" target=\"_blank\" rel=\"noopener\">Unsplash</a>",
  "footer.top": "Retour en haut ↑",
};

/* -------- Text written by JavaScript, in both languages -------- */
const STRINGS = {
  en: {
    "lang.switch": "Passer en français", // label of the button in English mode (it switches TO French)
    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "cv.download": "Download CV",
    "cv.request": "Request CV",
    "err.name": "Please enter your name.",
    "err.email": "Please enter a valid email address.",
    "err.message": "Please write a short message (at least 10 characters).",
    "form.sending": "Sending…",
    "form.sent": "Thanks! Your message has been sent. I'll be in touch soon.",
    "form.failed": "Sorry, something went wrong. Please try again later.",
    "form.opening": "Opening your email app…",
    "form.notSetUp": "The contact form isn't set up yet. Please check back soon.",
    "mail.subject": "{service} enquiry from {name}",
  },
  fr: {
    "lang.switch": "Switch to English",
    "theme.toLight": "Passer en mode clair",
    "theme.toDark": "Passer en mode sombre",
    "menu.open": "Ouvrir le menu",
    "menu.close": "Fermer le menu",
    "cv.download": "Télécharger le CV",
    "cv.request": "Demander le CV",
    "err.name": "Veuillez indiquer votre nom.",
    "err.email": "Veuillez indiquer une adresse e-mail valide.",
    "err.message": "Veuillez écrire un court message (au moins 10 caractères).",
    "form.sending": "Envoi en cours…",
    "form.sent": "Merci ! Votre message a bien été envoyé. Je vous réponds très vite.",
    "form.failed": "Désolé, une erreur est survenue. Veuillez réessayer plus tard.",
    "form.opening": "Ouverture de votre messagerie…",
    "form.notSetUp": "Le formulaire de contact n’est pas encore configuré. Revenez bientôt !",
    "mail.subject": "Demande de devis ({service}) de {name}",
  },
};

/* ==========================================================================
   Engine
   ========================================================================== */
const i18n = (() => {
  const SUPPORTED = ["en", "fr"];
  const originals = new WeakMap(); // English HTML/attributes, captured from the page
  let current = "en";

  const metaDescription = document.querySelector('meta[name="description"]');
  const englishMeta = { title: document.title, description: metaDescription.content };

  // Language to start with: saved choice → browser language → English
  function initialLang() {
    try {
      const saved = localStorage.getItem("lang");
      if (SUPPORTED.includes(saved)) return saved;
    } catch (e) {}
    return (navigator.language || "").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  // Translate a JS string, filling {placeholders} from vars
  function t(key, vars = {}) {
    const str = STRINGS[current][key] ?? STRINGS.en[key] ?? key;
    return str.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  }

  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang;

    // Element content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (!originals.has(el)) originals.set(el, { html: el.innerHTML });
      const saved = originals.get(el);
      const fr = FR[el.dataset.i18n];
      el.innerHTML = lang === "fr" && fr ? fr : saved.html;
    });

    // Attributes, e.g. data-i18n-attr="alt:about.photoAlt|aria-label:nav.logo"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      if (!originals.has(el)) originals.set(el, {});
      const saved = originals.get(el);
      el.dataset.i18nAttr.split("|").forEach((pair) => {
        const [attr, key] = pair.split(":");
        if (!(attr in saved)) saved[attr] = el.getAttribute(attr);
        const fr = FR[key];
        el.setAttribute(attr, lang === "fr" && fr ? fr : saved[attr]);
      });
    });

    // Tab title and search description
    document.title = lang === "fr" ? FR["meta.title"] : englishMeta.title;
    metaDescription.content = lang === "fr" ? FR["meta.description"] : englishMeta.description;

    // Let main.js refresh the labels it controls
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function set(lang) {
    if (!SUPPORTED.includes(lang)) return;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
    apply(lang);
  }

  return {
    t,
    set,
    get lang() {
      return current;
    },
    init() {
      apply(initialLang());
    },
  };
})();

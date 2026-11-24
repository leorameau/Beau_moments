// Adresses traduites de chaque page. Une seule source : le menu, le sélecteur de langue,
// les balises hreflang et le sitemap en dépendent.
import type { Lang } from './locales';

export const pages = {
  home: { nl: '/', fr: '/fr/', en: '/en/' },
  catering: { nl: '/catering/', fr: '/fr/traiteur/', en: '/en/catering/' },
  atelier: { nl: '/atelier/', fr: '/fr/atelier/', en: '/en/atelier/' },
  takeaway: { nl: '/afhaal/', fr: '/fr/a-emporter/', en: '/en/takeaway/' },
  gallery: { nl: '/galerij/', fr: '/fr/galerie/', en: '/en/gallery/' },
  about: { nl: '/over-ons/', fr: '/fr/a-propos/', en: '/en/about/' },
  legal: { nl: '/juridische-informatie/', fr: '/fr/mentions-legales/', en: '/en/legal-notice/' },
} satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof pages;

/** Formules de catering : chacune est une section (ancre) de la page catering */
export const eventSlugs = {
  home: { nl: 'prive-chef-aan-huis', fr: 'chef-a-domicile', en: 'private-chef-at-home' },
  celebrations: { nl: 'feesten', fr: 'fetes', en: 'celebrations' },
  weddings: { nl: 'huwelijk', fr: 'mariage', en: 'weddings' },
  corporate: { nl: 'bedrijfsevents', fr: 'entreprises', en: 'corporate' },
} satisfies Record<string, Record<Lang, string>>;

export type EventKey = keyof typeof eventSlugs;

/** Contenus sans page propre : une ancre sur la page légale (confidentialité) */
const anchors = {
  privacy: { page: 'legal', id: { nl: 'privacy', fr: 'confidentialite', en: 'privacy' } },
} as const;
type AnchorKey = keyof typeof anchors;
export const anchorId = (key: AnchorKey, lang: Lang) => anchors[key].id[lang];

export const pagePath = (key: PageKey | AnchorKey, lang: Lang): string =>
  key === 'privacy' ? `${pages[anchors[key].page][lang]}#${anchors[key].id[lang]}` : pages[key][lang];
/** Chaque formule est une section de la page catering */
export const eventPath = (key: EventKey, lang: Lang) => `${pages.catering[lang]}#${eventSlugs[key][lang]}`;

/** Construit { nl, fr, en } à partir d'une fonction */
export const allLangs = (fn: (l: Lang) => string): Record<Lang, string> => ({ nl: fn('nl'), fr: fn('fr'), en: fn('en') });

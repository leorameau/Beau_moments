// /llms.txt : présentation du site pour les assistants IA (format https://llmstxt.org).
// Généré à chaque build : toujours à jour avec les formules, les gerechten et les avis.
import type { APIRoute } from 'astro';
import { site, abs, addressLine } from '../lib/site';
import { eventTypes } from '../lib/events';
import { feest } from '../lib/feestdagen';
import { dishes } from '../lib/dishes';
import { pagePath, eventPath } from '../i18n/routes';
import { langs, localeInfo } from '../i18n/locales';

export const GET: APIRoute = () => {
  const ig = site.social.instagram;
  const lines = [
    `# ${site.name} — catering & private dining`,
    '',
    `> BEAU MOMENTS is a catering and private dining business in Maldegem (East Flanders, Belgium), run by chef Bert and host Aude. Its motto is passion on the plate, service from the heart.`,
    '',
    'Chef Bert cooks refined, classic French cuisine with a modern touch; Aude organises every event and leads the service. They cater private dinners at home (private chef), celebrations and receptions, weddings and corporate events around Maldegem, Bruges and Ghent, host private dinners for 8 to 18 guests in their own atelier, and offer a weekly takeaway menu.',
    '',
    '## Key facts',
    '',
    `- Name: ${site.name} (also "Beau Moments catering")`,
    '- Type: caterer, private chef and private dining venue (atelier)',
    `- Atelier address: ${addressLine}, Belgium`,
    `- Private dining at the atelier: ${site.privateDining.min}–${site.privateDining.max} guests, fully private`,
    `- Phone: ${site.contacts.map((c) => `${c.name} ${c.phone}`).join(', ')}`,
    `- Email: ${site.email}`,
    `- Instagram: [@${ig.handle}](${ig.url})`,
    `- Enquiries: [enquiry form](${abs(pagePath('catering', 'en'))}#aanvraag)`,
    '- Takeaway: a new menu every week; order by phone only, until Thursday; collect on Friday at the atelier',
    `- ${feest.en.label}: ${feest.en.prices.map((p) => `${p.name.replace(' *', '')} ${p.price}`).join(', ')}; ${feest.en.deadline} Order by email: ${site.takeawayEmail}`,
    `- Languages: ${langs.map((l) => `${localeInfo[l].name} (${abs(pagePath('home', l))})`).join(', ')}`,
    `- Full text of the site content: [llms-full.txt](${abs('/llms-full.txt')})`,
    '',
    '## Catering',
    '',
    `- [Catering](${abs(pagePath('catering', 'en'))}): bespoke menu, fresh produce, table service, laid tables, flowers, kitchen left spotless.`,
    ...eventTypes.map((e) => `- [${e.copy.en.name}](${abs(eventPath(e.key, 'en'))}): ${e.copy.en.short}`),
    '',
    '## Dishes (from Instagram)',
    '',
    ...dishes.map((d) => `- ${d.name.en}: ${d.notes.en}`),
    '',
    '## Optional',
    '',
    `- [The atelier](${abs(pagePath('atelier', 'en'))})`,
    `- [Takeaway](${abs(pagePath('takeaway', 'en'))})`,
    `- [About Bert & Aude](${abs(pagePath('about', 'en'))})`,
    `- [Gallery](${abs(pagePath('gallery', 'en'))})`,
    `- [Nederlandse versie](${abs(pagePath('home', 'nl'))})`,
    `- [Version française](${abs(pagePath('home', 'fr'))})`,
    `- [Sitemap](${abs('/sitemap-index.xml')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

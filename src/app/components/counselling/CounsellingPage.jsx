import Link from "next/link";
import { Noto_Sans_Telugu, Noto_Serif_Telugu } from "next/font/google";
import {
  UserRound,
  Brain,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  TriangleAlert,
  IndianRupee,
  Stethoscope,
  Languages,
  Lock,
  UsersRound,
  Ban,
  ShieldAlert,
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const teluguSans = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "600", "700"],
  variable: "--font-telugu-sans",
  display: "swap",
});

const teluguSerif = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: ["600", "700"],
  variable: "--font-telugu-serif",
  display: "swap",
  preload: false,
});

const SITE_URL = "https://www.satorufoundation.org";
const PHONE = "+91 99594 70022";
const PHONE_HREF = "tel:+919959470022";
const WHATSAPP_HREF = "https://wa.me/919959470022";
const EMAIL = "office@satorufoundation.org";

const LANGS = [
  { code: "en", label: "English", path: "/counselling" },
  { code: "te", label: "తెలుగు", path: "/te/counselling" },
];

const cardIcons = { elder: UserRound, memory: Brain, carer: HeartHandshake };

// Shared metadata for both language versions, with hreflang alternates.
export function buildMetadata(t) {
  const url = `${SITE_URL}${t.path}`;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        "en-IN": `${SITE_URL}/counselling`,
        "te-IN": `${SITE_URL}/te/counselling`,
        "x-default": `${SITE_URL}/counselling`,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Satoru Foundation",
      title: t.meta.title,
      description: t.meta.description,
      locale: t.meta.ogLocale,
      alternateLocale: t.lang === "te" ? ["en_IN"] : ["te_IN"],
      images: [{ url: `${SITE_URL}/logo.png`, alt: "Satoru Foundation" }],
    },
    twitter: {
      card: "summary",
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

function jsonLd(t) {
  const url = `${SITE_URL}${t.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_URL}/counselling#clinic`,
        name: t.lang === "te" ? "ఆత్మీయ స్పర్శ (Aatmeeya Sparsha)" : "Aatmeeya Sparsha",
        alternateName: t.lang === "te" ? "Aatmeeya Sparsha" : "ఆత్మీయ స్పర్శ",
        description: t.meta.description,
        url,
        inLanguage: t.lang,
        telephone: "+919959470022",
        email: EMAIL,
        image: `${SITE_URL}/logo.png`,
        medicalSpecialty: ["Geriatric", "Psychiatric"],
        availableLanguage: ["Telugu", "English", "Hindi"],
        isAcceptingNewPatients: true,
        address: {
          "@type": "PostalAddress",
          // TODO: add streetAddress and postalCode once the full address is confirmed.
          addressLocality: "Punjagutta, Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Hyderabad" },
          { "@type": "State", name: "Telangana" },
          { "@type": "State", name: "Andhra Pradesh" },
        ],
        parentOrganization: {
          "@type": "NGO",
          name: "Satoru Foundation",
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: t.lang,
        about: { "@id": `${SITE_URL}/counselling#clinic` },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: t.hero.name, item: url },
          ],
        },
      },
    ],
  };
}

function SectionHeading({ label, title, intro, light = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] [[lang=te]_&]:tracking-normal ${
          light ? "text-[#ecc750]" : "text-[#7a5814]"
        }`}
      >
        {label}
      </p>
      <h2
        className={`mt-3 text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-[#5e6f47]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed whitespace-pre-line ${light ? "text-white/90" : "text-gray-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

// Turns the first occurrence of `link.text` inside `text` into a link, with optional bold prefix before colon.
function TextWithLink({ text, link }) {
  const colonIndex = text.indexOf(":");
  let prefix = null;
  let remainingText = text;
  if (colonIndex > 0 && colonIndex < 60) {
    prefix = text.slice(0, colonIndex + 1);
    remainingText = text.slice(colonIndex + 1).trimStart();
  }

  const i = link ? remainingText.indexOf(link.text) : -1;
  return (
    <>
      {prefix && <strong className="font-bold text-[#4a5838]">{prefix} </strong>}
      {i === -1 ? (
        remainingText
      ) : (
        <>
          {remainingText.slice(0, i)}
          <Link href={link.href} className="font-semibold text-[#4a5838] underline underline-offset-4 hover:text-[#7a5814]">
            {link.text}
          </Link>
          {remainingText.slice(i + link.text.length)}
        </>
      )}
    </>
  );
}

function InfoCard({ Icon, title, children, className = "" }) {
  return (
    <article className={`rounded-2xl border border-[#5e6f47]/15 bg-white p-8 ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ecc750]/25 text-[#4a5838]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-2xl md:text-3xl font-bold leading-tight text-[#5e6f47]">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-gray-700">{children}</div>
    </article>
  );
}

function LangSwitch({ current, label }) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label={label}>
      <Languages className="h-4 w-4 text-[#5e6f47]" aria-hidden="true" />
      <div className="inline-flex rounded-full border border-[#5e6f47]/25 bg-white p-1">
        {LANGS.map((l) => {
          const active = l.code === current;
          return (
            <Link
              key={l.code}
              href={l.path}
              hrefLang={l.code}
              lang={l.code}
              aria-current={active ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                active
                  ? "bg-[#5e6f47] text-white"
                  : "text-[#5e6f47] hover:bg-[#ecc750]/30"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function CounsellingPage({ t }) {
  const isTe = t.lang === "te";

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(t)) }}
      />
      {/* Site navbar and footer stay outside the Telugu font scope so they match every other page. */}
      <Navbar />

      <main
        lang={t.lang}
        className={`${teluguSans.variable} ${teluguSerif.variable} text-gray-800 ${
          isTe ? "font-[family-name:var(--font-telugu-sans)] leading-[1.75]" : "font-sans"
        }`}
      >
        {/* Section nav + language switch */}
        <div className="border-b border-[#5e6f47]/15 bg-[#f4f6f0]">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 md:px-8">
            <nav aria-label={t.hero.name} className="hidden lg:flex flex-nowrap gap-x-5 xl:gap-x-7">
              {t.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="whitespace-nowrap text-sm font-semibold text-[#5e6f47] hover:text-[#b8962f]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="ml-auto">
              <LangSwitch current={t.lang} label={t.switchLabel} />
            </div>
          </div>
        </div>

        {/* Hero */}
        <header className="relative overflow-hidden bg-[#4a5838] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full border-2 border-[#ecc750]/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-white/5"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] [[lang=te]_&]:tracking-normal text-[#ecc750]">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-6">
              <span
                className={`block font-bold leading-tight text-5xl md:text-7xl ${
                  isTe ? "font-[family-name:var(--font-telugu-serif)]" : "font-serif"
                }`}
              >
                {t.hero.name}
              </span>
              <span className="mt-3 block text-xl md:text-2xl font-semibold text-[#ecc750]">
                {t.hero.subtitle}
              </span>
            </h1>
            <p
              lang={t.hero.altLang}
              className={`mt-2 text-lg text-white/85 ${
                t.hero.altLang === "te" ? "font-[family-name:var(--font-telugu-serif)]" : "font-serif"
              }`}
            >
              {t.hero.altName}
            </p>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/90">
              {t.hero.lede}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {t.hero.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm text-white/90"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ecc750] px-6 py-3 font-bold text-[#3f4b2f] shadow-lg transition-colors hover:bg-white"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {t.hero.call}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/60 px-6 py-3 font-bold text-white transition-colors hover:border-[#ecc750] hover:text-[#ecc750]"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {t.hero.email}
              </a>
            </div>
          </div>
        </header>

        {/* Who it is for */}
        <section id="who" className="scroll-mt-28 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading label={t.who.label} title={t.who.title} intro={t.who.intro} />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.who.cards.map((card) => {
                const Icon = cardIcons[card.icon];
                return (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-[#5e6f47]/15 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecc750]/25 text-[#5e6f47]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-[#5e6f47]">{card.title}</h3>
                    <p className="mt-3 leading-relaxed text-gray-600">{card.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* What we help with */}
        <section id="help" className="scroll-mt-28 bg-[#f4f6f0] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading label={t.help.label} title={t.help.title} intro={t.help.intro} />
            <ul className="mt-10 flex flex-wrap gap-3">
              {t.help.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#5e6f47]/20 bg-white px-5 py-2.5 text-[15px] font-medium text-[#4a5838]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Our approach */}
        <section id="approach" className="scroll-mt-28 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading label={t.approach.label} title={t.approach.title} intro={t.approach.intro} />
            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {t.approach.items.map((item) => (
                <article key={item.title} className="border-l-4 border-[#ecc750] pl-5">
                  <h3 className="text-lg font-bold text-[#5e6f47]">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-28 bg-[#f4f6f0] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading label={t.how.label} title={t.how.title} />
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.how.steps.map((step, i) => (
                <li key={step.title} className="rounded-2xl bg-white p-7 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4a5838] text-lg font-bold text-[#ecc750]">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#5e6f47]">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Fees and team */}
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 md:px-8">
            {[
              { ...t.fees, Icon: IndianRupee },
              { ...t.team, Icon: Stethoscope },
            ].map(({ label, title, text, Icon }) => (
              <article key={label} className="rounded-2xl border border-[#5e6f47]/15 p-8">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[#b8962f]" aria-hidden="true" />
                  <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] [[lang=te]_&]:tracking-normal text-[#7a5814]">
                    {label}
                  </p>
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-tight text-[#5e6f47]">{title}</h2>
                <p className="mt-4 leading-relaxed text-gray-600">{text}</p>
              </article>
            ))}
          </div>

          {/* Confidentiality, eligibility, limits (and harm, once approved) */}
          <div className="mx-auto mt-6 grid max-w-6xl gap-6 px-4 md:grid-cols-2 md:px-8">
            <InfoCard Icon={Lock} title={t.privacy.title}>
              {t.privacy.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </InfoCard>
            <InfoCard Icon={UsersRound} title={t.eligibility.title}>
              {t.eligibility.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </InfoCard>
            <InfoCard Icon={Ban} title={t.limits.title} className="md:col-span-2">
              <ul className="grid gap-x-10 gap-y-3 md:grid-cols-2">
                {t.limits.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a5814]" aria-hidden="true" />
                    <span>
                      <TextWithLink text={item} link={t.limits.directoryLink} />
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>
            {t.harm.publish && (
              <InfoCard Icon={ShieldAlert} title={t.harm.title} className="md:col-span-2">
                {t.harm.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </InfoCard>
            )}
          </div>

          {/* Emergency notice */}
          <div className="mx-auto mt-6 max-w-6xl px-4 md:px-8">
            <aside className="flex gap-4 rounded-2xl border border-[#c0503a]/30 bg-[#fdf3ef] p-6 md:p-8">
              <TriangleAlert className="mt-1 h-6 w-6 shrink-0 text-[#a8432f]" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-bold text-[#8f3826]">{t.emergency.title}</h2>
                <p className="mt-2 leading-relaxed text-gray-700 whitespace-pre-line">{t.emergency.text}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                  <a href="tel:108" className="rounded-full bg-[#a8432f] px-4 py-1.5 text-white hover:bg-[#8f3826]">
                    108
                  </a>
                  <a href="tel:14416" className="rounded-full border border-[#a8432f] px-4 py-1.5 text-[#a8432f] hover:bg-[#a8432f] hover:text-white">
                    Tele-MANAS 14416
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Book */}
        <section id="book" className="scroll-mt-28 bg-[#4a5838] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeading label={t.book.label} title={t.book.title} intro={t.book.intro} light />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm">
                <Phone className="h-6 w-6 text-[#ecc750]" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider [[lang=te]_&]:tracking-normal text-white/85">{t.book.phoneLabel}</h3>
                <a href={PHONE_HREF} className="mt-2 block text-2xl font-bold text-white hover:text-[#ecc750]">
                  {PHONE}
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-white underline underline-offset-4 hover:text-[#ecc750]"
                >
                  WhatsApp →
                </a>
              </div>
              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm">
                <Mail className="h-6 w-6 text-[#ecc750]" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider [[lang=te]_&]:tracking-normal text-white/85">{t.book.emailLabel}</h3>
                <a href={`mailto:${EMAIL}`} className="mt-2 block break-all text-lg font-bold text-white hover:text-[#ecc750]">
                  {EMAIL}
                </a>
              </div>
              <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm">
                <MapPin className="h-6 w-6 text-[#ecc750]" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider [[lang=te]_&]:tracking-normal text-white/85">{t.book.visitLabel}</h3>
                <address className="mt-2 not-italic text-lg font-semibold text-white">{t.book.address}</address>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
            <p className="leading-relaxed text-gray-600">{t.about.text}</p>
            <p className="mt-3 text-sm text-gray-600">{t.about.legal}</p>
          </div>
        </section>

      </main>

      <Footer email={EMAIL} />
    </div>
  );
}

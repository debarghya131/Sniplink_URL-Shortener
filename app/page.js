import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";



const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/debarghya-bandyopadhyay-953b02400?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: "linkedin",
  },
  {
    name: "X",
    href: "https://x.com/debarghya131",
    icon: "x",
  },
  {
    name: "GitHub",
    href: "https://github.com/debarghya131",
    icon: "github",
  },
  {
    name: "Portfolio",
    href: "https://portfolio.debarghya.org",
    icon: "portfolio",
  },
  {
    name: "Email",
    href: "mailto:debarghyabandyopadhyay191@gmail.com",
    icon: "email",
  },
];

const stats = [
  { value: "12.5K", label: "links shortened" },
  { value: "99.9%", label: "redirect uptime" },
  { value: "0", label: "login walls" },
];

function SocialIcon({ icon }) {
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.1h4.36V23H.32V8.1ZM8.12 8.1h4.18v2.04h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.22 2.9 5.22 6.66V23h-4.36v-7.5c0-1.78-.04-4.08-2.48-4.08-2.48 0-2.86 1.94-2.86 3.94V23H8.12V8.1Z" />
      </svg>
    );
  }

  if (icon === "x") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2h3.3l-7.2 8.22L23.47 22h-6.64l-5.2-6.8L5.68 22H2.38l7.7-8.8L1.95 2h6.8l4.7 6.22L18.9 2Zm-1.16 17.92h1.82L7.76 3.98H5.8l11.94 15.94Z" />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.48.11-3.06 0 0 .98-.31 3.17 1.18a10.98 10.98 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.76.11 3.06.75.8 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.79 1.08.79 2.18v3.13c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  if (icon === "portfolio") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.25 2.46 3.5 5.45 3.5 9s-1.25 6.54-3.5 9c-2.25-2.46-3.5-5.45-3.5-9S9.75 5.46 12 3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 5h16v14H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-[#fffceb] text-black">
      <section className="relative isolate overflow-hidden border-b border-black/10 bg-[linear-gradient(115deg,#fffceb_0%,#fff6bd_48%,#f4d94d_100%)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.65),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.16),transparent_42%)]" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1fr_0.85fr] lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-black/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase text-black/70 shadow-sm backdrop-blur">
              Simple links, serious polish
            </p>
            <h1 className={`max-w-4xl text-balance text-3xl font-bold leading-[1.05] min-[390px]:text-4xl sm:text-6xl lg:text-7xl ${poppins.className}`}>
              Short links that look clean, fast, and trustworthy.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/75 sm:text-lg">
              SnipLink turns long, messy URLs into sharp shareable links without signups, tracking-heavy flows, or visual clutter.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/shorten" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-bold text-yellow-300 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-neutral-900">
                Start shortening
              </Link>
              <a href="#connect" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-black/20 bg-white/70 px-6 py-3 text-sm font-bold text-black shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white">
                Connect with me
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 min-[390px]:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-black/20 pl-4">
                  <p className={`text-2xl font-bold sm:text-3xl ${poppins.className}`}>{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase text-black/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full rounded-lg border border-black/15 bg-black p-2 shadow-2xl shadow-black/25 sm:p-3">
            <div className="rounded-md bg-[#fff8c7] p-5 sm:p-6">
              <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4">
                <div className="min-w-0 pr-3">
                  <p className="text-xs font-bold uppercase text-black/45">SnipLink Studio</p>
                  <p className={`mt-1 text-xl font-bold sm:text-2xl ${poppins.className}`}>Create a short link</p>
                </div>
                <Image
                  src="/web-tab-logo.webp"
                  alt="SnipLink logo"
                  width={44}
                  height={44}
                  className="h-10 w-10 shrink-0 rounded-full sm:h-11 sm:w-11"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase text-black/45">Destination</p>
                  <div className="truncate rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/55 shadow-sm">
                    https://example.com/very-long-campaign-link
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase text-black/45">Short URL</p>
                  <div className="flex items-center justify-between gap-3 rounded-lg bg-black px-4 py-3 text-sm font-bold text-yellow-300 shadow-lg">
                    <span className="min-w-0 truncate">snip.link/product-drop</span>
                    <span className="shrink-0 text-yellow-100">Copy</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2">
                <div className="rounded-lg bg-white/75 p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase text-black/45">Clicks</p>
                  <p className={`mt-2 text-3xl font-bold ${poppins.className}`}>1,820</p>
                </div>
                <div className="rounded-lg bg-white/75 p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase text-black/45">Status</p>
                  <p className={`mt-2 text-3xl font-bold ${poppins.className}`}>Live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="connect" className="px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col items-start justify-between gap-3 border-t border-black/20 pt-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-black/45">Creator links</p>
              <h2 className={`mt-2 text-2xl font-bold sm:text-3xl ${poppins.className}`}>Connect With Me</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-black/60">
              Follow the project, see more builds, or reach out directly.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex min-h-14 items-center justify-center gap-3 rounded-lg bg-black px-4 py-3 text-sm font-bold text-yellow-300 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-900 sm:text-base"
                aria-label={link.name}
              >
                <SocialIcon icon={link.icon} />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

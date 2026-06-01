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
    <main className="bg-yellow-50 text-black">
      <section className="mx-auto grid max-w-7xl grid-cols-1 md:min-h-[50vh] md:grid-cols-2">
        <div className="flex flex-col gap-4 items-center justify-center px-4 py-10 text-center sm:px-6 md:items-start md:text-left lg:px-10">
          <p className={`max-w-[22ch] text-balance text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${poppins.className}`}>
            The best URL shortener in the market
          </p>
          <p className="max-w-xl text-sm leading-6 sm:text-base">
            We are the most straightforward URL shortener in the world. Most URL shorteners track you or ask you to log in. We understand your needs, so we created this simple URL shortener.
          </p>
          <div className='flex gap-3'>
          <Link href="/shorten" className='bg-black rounded-lg shadow-lg px-4 py-2 font-bold text-yellow-300 hover:bg-neutral-900'>Try Now</Link>
        </div>
        </div>
        <div className="relative min-h-64 sm:min-h-80 md:min-h-[26rem]">
          <Image className="mix-blend-darken object-contain" alt="URL shortener illustration" src={"/vector.webp"} fill={true} priority />
        </div>

      </section>
      <section className="px-4 pt-12 pb-12 sm:px-6 sm:pt-16 sm:pb-14 lg:pt-24">
        <div className="mx-auto max-w-5xl border-t-2 border-black pt-8">
          <h2 className={`text-center text-xl font-bold sm:text-2xl ${poppins.className}`}>Connect With Me</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex min-h-12 items-center justify-center gap-3 rounded-lg bg-black px-4 py-3 text-sm font-bold text-yellow-300 shadow-lg hover:bg-neutral-900 sm:text-base"
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

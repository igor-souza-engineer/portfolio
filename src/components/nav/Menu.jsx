import { Link } from "react-router-dom";

const links = [
  { label: "Projects", href: "/#projects", type: "anchor" },
  { label: "About", href: "/#about", type: "anchor" },
  { label: "Insights", href: "/Insights", type: "route" },
  { label: "Contact", href: "/#contact", type: "anchor" },
];

export default function Menu() {
  return (
    <nav className="hidden md:flex items-center gap-10 text-[16px] leading-[22px] font-medium text-neutral-200">
      {links.map((link) =>
        link.type === "route" ? (
          <Link
            key={link.href}
            to={link.href}
            className="transition hover:text-white"
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={link.href}
            href={link.href}
            className="transition hover:text-white"
          >
            {link.label}
          </a>
        )
      )}

      <a
        href="https://github.com/igor-souza-engineer"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
        className="text-neutral-200 transition hover:text-white"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 fill-current"
          aria-hidden="true"
        >
          <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1v3.12c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35 0.5 12 0.5Z" />
        </svg>
      </a>
    </nav>
  );
}
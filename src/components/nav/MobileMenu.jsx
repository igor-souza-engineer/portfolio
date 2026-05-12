import { Link } from "react-router-dom";

const links = [
  { label: "Projects", href: "/#projects", type: "anchor" },
  { label: "About", href: "/#about", type: "anchor" },
  { label: "Insights", href: "/Insights", type: "route" },
  { label: "Contact", href: "/#contact", type: "anchor" },
];

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-6 top-[40px] z-50 w-[150px] rounded-[12px] border border-white/10 bg-[#111111]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-md md:hidden">
      <nav className="flex flex-col gap-1">
        {links.map((link) =>
          link.type === "route" ? (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="rounded-[8px] px-3 py-2 text-[14px] leading-[20px] font-medium text-[#FFFFFF] transition hover:bg-white/5 hover:text-[#9CA3AF]"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-[8px] px-3 py-2 text-[14px] leading-[20px] font-medium text-[#FFFFFF] transition hover:bg-white/5 hover:text-[#9CA3AF]"
            >
              {link.label}
            </a>
          )
        )}
      </nav>
    </div>
  );
}
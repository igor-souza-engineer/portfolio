import { Link } from "react-router-dom";

export default function Brand() {
  return (
    <div className="flex flex-col">
      <div>
        <p className="text-[18px] leading-[18px] font-bold text-[#FFFFFF]">
          Igor Souza
        </p>
        <p className="text-[14px] leading-[30px] font-normal text-[#9CA3AF]">
          Frontend Engineer
        </p>
      </div>

      <nav className="mt-8 flex flex-col gap-4">
        <a
          href="/"
          className="text-[14px] leading-[16px] font-medium text-[#FFFFFF] transition hover:text-[#9CA3AF]"
        >
          Home
        </a>

        <a
          href="/#about"
          className="text-[14px] leading-[16px] font-medium text-[#FFFFFF] transition hover:text-[#9CA3AF]"
        >
          About
        </a>

        <a
          href="/#projects"
          className="text-[14px] leading-[16px] font-medium text-[#FFFFFF] transition hover:text-[#9CA3AF]"
        >
          Projects
        </a>

        <Link
          to="/Insights"
          className="text-[14px] leading-[16px] font-medium text-[#FFFFFF] transition hover:text-[#9CA3AF]"
        >
          Insights
        </Link>
      </nav>
    </div>
  );
}
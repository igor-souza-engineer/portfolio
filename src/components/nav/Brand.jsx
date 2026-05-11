import { Link } from "react-router-dom";

export default function Brand() {
  return (
    <Link
      to="/"
      className="text-[22px] leading-[28px] font-bold text-[#FFFFFF] transition hover:text-[#9CA3AF]"
    >
      Igor Souza
    </Link>
  );
}
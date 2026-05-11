import { Link } from "react-router-dom";

export default function BlogContent() {
  return (
    <div className="max-w-[720px]">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center text-[14px] leading-[20px] font-medium text-[#9CA3AF] transition hover:text-[#FFFFFF]"
      >
        ← Back to home
      </Link>

      {/* Label */}
      <span className="mt-8 block text-[13px] leading-[18px] font-medium tracking-[0.08em] uppercase text-[#0A84FF]">
        Insights ·
      </span>

      {/* Title */}
      <h2 className="mt-5 text-[48px] leading-[56px] md:text-[64px] md:leading-[72px] font-normal tracking-[-0.05em] text-[#FFFFFF]">
        Hello, Everyone!
      </h2>

      {/* Description */}
      <div className="mt-6 flex flex-col gap-5 text-[18px] leading-[28px] md:text-[20px] md:leading-[32px] font-normal text-[#9CA3AF]">
        <p>
          I created this space to share my thoughts on front-end engineering, technology, and how they impact our lives. I believe that sharing quality content helps me improve my skills and gives others a different perspective.
        </p>

        <p>I hope you enjoy it and feel free to come back any time!</p>
      </div>
    </div>
  );
}
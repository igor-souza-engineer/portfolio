export default function Content() {
  return (
    <div className="flex flex-col gap-6 max-w-[320px] md:max-w-2xl">
      <div className="flex flex-col gap-7 md:gap-14">
        {/* Eyebrow */}
        <span className="text-[12px] leading-[16px] md:text-[15px] md:leading-[20px] font-normal tracking-[0.24em] md:tracking-[0.2em] uppercase text-[#9CA3AF]">
          Frontend Engineer • Next.js • React • TypeScript • Web3
        </span>

        {/* Headline */}
        <h1 className="max-w-[300px] md:max-w-none text-[30px] leading-[38px] md:text-[35px] md:leading-[44px] font-bold text-[#FFFFFF]">
          Designed and built high-performance web products.
        </h1>
      </div>

      {/* Supporting text */}
      <p className="max-w-[310px] md:max-w-none text-[16px] leading-[22px] md:text-[19px] md:leading-[26px] font-normal text-[#9CA3AF]">
        <span className="font-medium text-[#FFFFFF]">Focused on</span>{" "}
        clean <span className="font-medium text-[#FFFFFF]">UI</span>,
        strong <span className="font-medium text-[#FFFFFF]">UX</span>,
        and scalable front-end architecture —from landing pages to Web3
        dashboards.
      </p>
    </div>
  );
}
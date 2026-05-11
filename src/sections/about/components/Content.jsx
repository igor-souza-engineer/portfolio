export default function Content() {
  return (
    <div className="flex max-w-[520px] flex-col">
      {/* Label */}
      <span className="text-[23px] leading-[28px] md:text-[25px] md:leading-[30px] font-medium text-[#9CA3AF]">
        About
      </span>

      {/* Headline */}
      <h2 className="mt-5 max-w-[500px] text-[30px] leading-[34px] md:text-[36px] md:leading-[40px] font-bold tracking-[-0.03em] text-[#FFFFFF]">
        Front-end designed and built with a strong product mindset.
      </h2>

      {/* Body copy */}
      <div className="mt-10 flex max-w-[500px] flex-col gap-5">
        <p className="text-[14px] leading-[23px] md:text-[18px] md:leading-[24px] font-normal text-[#9CA3AF]">
          My work focuses on clean{" "}
          <span className="font-medium text-[#FFFFFF]">UI</span>, thoughtful{" "}
          <span className="font-medium text-[#FFFFFF]">UX</span>, and scalable{" "}
          <span className="font-medium text-[#FFFFFF]">
            {" "}
            front-end architecture
          </span>{" "}
          — turning complex requirements into clean and intuitive user
          experiences.
        </p>

        <p className="text-[14px] leading-[23px] md:text-[18px] md:leading-[24px] font-normal text-[#9CA3AF]">
          I work with{" "}
          <span className="font-medium text-[#FFFFFF]">React</span>,{" "}
          <span className="font-medium text-[#FFFFFF]">Next.js</span>,{" "}
          <span className="font-medium text-[#FFFFFF]">TypeScript</span>, and{" "}
          <span className="font-medium text-[#FFFFFF]">Tailwind CSS</span>, and
          have experience building{" "}
          <span className="font-medium text-[#FFFFFF]">Web3</span> interfaces,
          dashboards, and marketing-driven products.
        </p>
      </div>
    </div>
  );
}
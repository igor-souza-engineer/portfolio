import Button from "./Button";

export default function Content() {
  return (
    <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
      {/* Label */}
      <span className="text-[22px] leading-[26px] md:text-[25px] md:leading-[30px] font-medium text-[#9CA3AF]">
        Contact
      </span>

      {/* Headline */}
      <h2 className="mt-5 text-[28px] leading-[32px] md:text-[40px] md:leading-[38px] font-bold tracking-[-0.03em] text-[#FFFFFF]">
        Let’s build something that matters.
      </h2>

      {/* Supporting text */}
      <p className="mt-7 max-w-[430px] md:max-w-[620px] text-[15px] leading-[22px] md:text-[20px] md:leading-[30px] font-normal text-[#9CA3AF]">
        I help teams design and build front-end systems focused on{" "}
        <span className="font-medium text-[#FFFFFF]">performance</span>,
        clarity, and{" "}
        <span className="font-medium text-[#FFFFFF]">long-term quality</span>.
      </p>

      {/* Button */}
      <div className="mt-9">
        <Button />
      </div>
    </div>
  );
}
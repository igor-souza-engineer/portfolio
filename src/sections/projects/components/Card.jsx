export default function Card({ title, description, stack, liveUrl, sourceUrl }) {
  return (
    <article className="flex min-h-[150px] flex-col justify-between rounded-[10px] bg-[#050505] p-5">
      <div className="flex flex-col gap-4">
        <h3 className="text-[16px] leading-[18px] font-bold text-[#FFFFFF]">
          {title}
        </h3>

        <p className="text-[14px] leading-[17px] font-normal text-[#9CA3AF]">
          {description}
        </p>

        <p className="text-[12px] leading-[17px] font-medium text-[#FFFFFF]">
          {stack}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-8">
        <a
          href={liveUrl}
          className="text-[12px] leading-[16px] font-medium text-[#0A84FF] transition hover:text-[#60A5FA]"
        >
          View Project
        </a>

        <a
          href={sourceUrl}
          className="text-[11px] leading-[16px] font-medium text-[#9CA3AF] transition hover:text-[#FFFFFF]"
        >
          Source code
        </a>
      </div>
    </article>
  );
}
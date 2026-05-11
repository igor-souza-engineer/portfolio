export default function PostCard({ post }) {
  return (
    <article className="group rounded-[14px] border border-white/10 bg-[#111111]/60 transition duration-300 hover:border-white/20">
      <a
        href={post.href}
        className="grid grid-cols-1 gap-4 p-5 md:grid-cols-[120px_1fr_auto] md:items-center md:p-6"
      >
        {/* Date */}
        <div className="text-[13px] leading-[18px] font-normal text-[#9CA3AF]">
          {post.date}
        </div>

        {/* Content */}
        <div>
          <span className="text-[11px] leading-[16px] font-medium uppercase tracking-[0.08em] text-[#0A84FF]">
            {post.category}
          </span>

          <h3 className="mt-2 text-[17px] leading-[23px] font-medium tracking-[-0.02em] text-[#FFFFFF] md:text-[19px] md:leading-[26px]">
            {post.title}
          </h3>

          <p className="mt-2 max-w-[520px] text-[13px] leading-[21px] font-normal text-[#9CA3AF] md:text-[14px] md:leading-[22px]">
            {post.excerpt}
          </p>
        </div>

        {/* Link */}
        <div className="md:justify-self-end">
          <span className="text-[14px] leading-[20px] font-medium text-[#0A84FF] transition group-hover:text-[#60A5FA]">
            Read more →
          </span>
        </div>
      </a>
    </article>
  );
}
import { Link } from "react-router-dom";

export default function FeaturedPost({ post }) {
  return (
    <article className="group rounded-[16px] border border-white/10 bg-[#0F0F0F]/70 p-5 transition duration-300 hover:border-white/20 md:p-7">
      <Link
        to={post.href}
        className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr] md:items-center"
      >
        {/* Thumbnail */}
        <div className="relative h-[180px] overflow-hidden rounded-[12px] bg-[#0B0B0B] md:h-[220px]">
          {post.image ? (
            <img
              src={post.image}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_70%_70%,rgba(10,132,255,0.38),transparent_35%),linear-gradient(135deg,#0B0B0B,#111111,#262626)]" />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0B0B0B]/70 via-transparent to-[#0A84FF]/10" />
        </div>

        {/* Content */}
        <div className="flex min-h-[220px] flex-col justify-between">
          <div>
            <div className="flex items-center justify-end">
              <span className="text-[14px] leading-[20px] font-normal text-[#9CA3AF]">
                {post.date}
              </span>
            </div>

            <h3 className="mt-8 max-w-[620px] text-[26px] leading-[32px] font-normal tracking-[-0.03em] text-[#FFFFFF] md:text-[30px] md:leading-[38px]">
              {post.title}
            </h3>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[24px] font-normal text-[#9CA3AF] md:text-[16px] md:leading-[26px]">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <span className="text-[15px] leading-[20px] font-medium text-[#0A84FF] transition group-hover:text-[#60A5FA]">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
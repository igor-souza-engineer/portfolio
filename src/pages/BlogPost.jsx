import { Link, useParams } from "react-router-dom";
import { posts } from "../sections/blog/postsData";

export default function BlogPost() {
  const { slug } = useParams();

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0B0B0B] text-[#FFFFFF]">
        <div className="mx-auto max-w-[860px] px-6 py-28 lg:px-8">
          <Link
            to="/Insights"
            className="text-[14px] leading-[20px] font-medium text-[#0A84FF] transition hover:text-[#60A5FA]"
          >
            ← Back to Insights
          </Link>

          <h1 className="mt-10 text-[40px] leading-[48px] font-bold tracking-[-0.04em]">
            Post not found.
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#FFFFFF]">
      <article className="mx-auto max-w-[860px] px-6 py-28 lg:px-8">
        <Link
          to="/Insights"
          className="inline-flex text-[14px] leading-[20px] font-medium text-[#0A84FF] transition hover:text-[#60A5FA]"
        >
          ← Back to Insights
        </Link>

        <header className="mt-10">
          <span className="text-[13px] leading-[18px] font-medium uppercase tracking-[0.08em] text-[#0A84FF]">
            Insights
          </span>

          <h1 className="mt-6 max-w-[820px] text-[42px] leading-[48px] font-bold tracking-[-0.04em] text-[#FFFFFF] md:text-[56px] md:leading-[64px]">
            {post.title}
          </h1>

          <p className="mt-6 text-[16px] leading-[26px] font-normal text-[#9CA3AF]">
            {post.date} by{" "}
            <span className="text-[#0A84FF]">Igor Souza</span>
          </p>

          <p className="mt-10 max-w-[820px] text-[22px] leading-[34px] font-medium text-[#FFFFFF]">
            The first post of this blog is about my transition into front-end
            engineering, my background, and why I’m building this space to
            document what I learn along the way.
          </p>
        </header>

        <div className="my-12 h-px w-full bg-white/10" />

        <div className="flex flex-col gap-8 text-[18px] leading-[32px] font-normal text-[#D1D5DB]">
          <p>
            My name is Igor Souza. I have a background in International
            Relations, and over the past few years, I started transitioning my
            career into technology.
          </p>

          <p>
            I have always seen technology as one of the most important forces
            shaping society. It changes the way people learn, work, invest,
            communicate, and make decisions. After exploring different paths
            within software engineering, I connected strongly with front-end
            engineering because of its direct relationship with the final user
            experience.
          </p>

          <p>
            That connection with user experience influences the way I think
            about development. To me, code is not just logic that works. Code is
            part of a product. It is part of an experience that needs to be
            clear, accessible, intuitive, and useful for real people.
          </p>

          <p>
            Software is not built only for developers. It is built for people
            with different ages, backgrounds, levels of knowledge, and ways of
            thinking. That is why I believe good interfaces should not only
            work. They should reduce complexity, guide the user, and make
            decisions easier.
          </p>

          <p>
            In parallel, I have more than six years of experience in the crypto
            market. During this time, I worked with market analysis, spot and
            futures trading, price action, Smart Money Concepts, user education,
            and solutions built for investor communities.
          </p>

          <p>
            I also worked in a crypto community startup, where I helped create
            lead acquisition landing pages, produced educational content,
            recorded tutorials to teach users how to use exchanges, and hosted
            trading lives explaining, in a clear and practical way, how to
            structure crypto trades using price action and risk management.
          </p>

          <p>
            Beyond the educational and analytical side, I built practical
            projects to solve real problems in this ecosystem. I developed
            automation bots for crypto communities, including a news bot
            integrated with CryptoPanic and a trade automation bot, focused on
            improving the speed, organization, and clarity of the information
            delivered to users.
          </p>

          <p>
            This combination of technology, product thinking, crypto, education,
            automation, and user experience shapes the way I am building my path
            as a front-end developer. My goal is not only to write code, but to
            create interfaces and systems that are thoughtful, useful, and
            capable of delivering real value.
          </p>

          <h2 className="pt-4 text-[28px] leading-[36px] font-bold tracking-[-0.03em] text-[#FFFFFF]">
            Why I’m writing
          </h2>

          <p>
            I believe writing is one of the best ways to think clearly. This
            blog is not just about publishing articles. It is about documenting
            how I learn, how I make technical decisions, how I improve my craft,
            and how I connect design, engineering, and product thinking.
          </p>

          <p>
            Here, I want to write about front-end development, React, Tailwind
            CSS, user interfaces, performance, Web3 products, dashboards,
            architecture decisions, and the process of becoming a better
            developer.
          </p>

          <h2 className="pt-4 text-[28px] leading-[36px] font-bold tracking-[-0.03em] text-[#FFFFFF]">
            What you can expect
          </h2>

          <p>
            You can expect practical notes, reflections, technical breakdowns,
            and honest lessons from the projects I build. Some posts will be
            deeply technical. Others will be more personal, focused on career,
            discipline, learning, and the mindset behind building things with
            care.
          </p>

          <p>This is the beginning of the journal. More writing is coming soon.</p>
        </div>
      </article>
    </main>
  );
}
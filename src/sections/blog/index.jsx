    import Container from "./layout/Container";
    import BlogContent from "./components/BlogContent";
    import FeaturedPost from "./components/FeaturedPost";
    import PostCard from "./components/PostCard";
    import { featuredPost, regularPosts } from "./postsData";
    import Reveal from "../../components/Reveal";

    export default function Blog() {
    return (
        <section id="blog" className="relative bg-[#0B0B0B]">
        <Container>
            <div className="flex flex-col gap-12">
            <Reveal y={28}>
                <BlogContent />
            </Reveal>

            <Reveal delay={0.12} y={32}>
                <FeaturedPost post={featuredPost} />
            </Reveal>

            {/*
                Future posts feed.
                Re-enable this block when real articles are added.

                <div className="flex flex-col gap-5">
                {regularPosts.map((post, index) => (
                    <Reveal key={post.title} delay={0.08 * index} y={24}>
                    <PostCard post={post} />
                    </Reveal>
                ))}
                </div>
            */}

            <p className="text-center text-[14px] leading-[22px] font-normal text-[#9CA3AF]">
                More writing coming soon.
            </p>
            </div>
        </Container>
        </section>
    );
    }
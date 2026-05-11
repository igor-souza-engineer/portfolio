import { Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import Header from "../components/nav/Header";
import ScrollToTop from "../components/ScrollToTop";
import BlogPost from "../pages/BlogPost";

import Hero from "../sections/hero";
import About from "../sections/about";
import Projects from "../sections/projects";
import Blog from "../sections/blog";
import Contact from "../sections/contact";
import Footer from "../sections/footer";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function BlogPage() {
  return (
    <>
      <Blog />
      <Footer />
    </>
  );
}

function BlogPostPage() {
  return (
    <>
      <BlogPost />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.045,
        smoothWheel: true,
        wheelMultiplier: 0.8,
      }}
    >
      <ScrollToTop />

      <div className="min-h-screen bg-[#0B0B0B] text-white antialiased">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Insights" element={<BlogPage />} />
          <Route path="/Insights/:slug" element={<BlogPostPage />} />

        </Routes>
      </div>
    </ReactLenis>
  );
}
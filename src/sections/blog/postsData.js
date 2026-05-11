export const posts = [
  {
    title: "Building My Path as a Front-end Developer",
    excerpt:
      "A personal introduction about my journey, my background in operations, my transition into front-end development, and why I created this space to share what I learn along the way.",
    date: "May 8, 2026",
    category: "Journey",
    slug: "building-my-path-as-a-front-end-developer",
    href: "/Insights/building-my-path-as-a-front-end-developer",
    image: null,
    featured: true,
  },
  {
    title: "Shipping Features with Confidence Using Progressive Delivery",
    excerpt:
      "How feature flags, metrics, and iteration loops help teams ship safer product experiences.",
    date: "May 7, 2026",
    category: "Engineering",
    slug: "shipping-features-with-confidence",
    href: "/blog/shipping-features-with-confidence",
    image: null,
    featured: false,
  },
  {
    title: "Designing Front-end Systems with a Product Mindset",
    excerpt:
      "How developers can think beyond components and build interfaces that solve real user problems.",
    date: "April 24, 2026",
    category: "Product",
    slug: "designing-front-end-systems-with-a-product-mindset",
    href: "/blog/designing-front-end-systems-with-a-product-mindset",
    image: null,
    featured: false,
  },
  {
    title: "Performance Budgets for Modern Front-end Apps",
    excerpt:
      "A practical approach to measuring, budgeting, and improving performance before it becomes a problem.",
    date: "April 10, 2026",
    category: "Performance",
    slug: "performance-budgets-for-modern-front-end-apps",
    href: "/blog/performance-budgets-for-modern-front-end-apps",
    image: null,
    featured: false,
  },
];

export const featuredPost = posts.find((post) => post.featured) ?? posts[0];

export const regularPosts = posts.filter(
  (post) => post.title !== featuredPost.title
);
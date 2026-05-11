import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const scrollToTop = () => {
      if (lenis) {
        lenis.scrollTo(0, {
          immediate: true,
          force: true,
        });
      }

      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop);
    });
  }, [location.pathname, lenis]);

  return null;
}
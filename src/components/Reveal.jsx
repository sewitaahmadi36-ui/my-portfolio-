import { useEffect, useRef, useState } from "react";

function Reveal({ children }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${visible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
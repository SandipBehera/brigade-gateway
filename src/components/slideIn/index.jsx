import React, { useEffect, useRef, useState } from 'react';
// import '../styles.css'; // Make sure to import your CSS file

const SlideInLeftComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Adjust this value based on when you want to trigger the animation
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`slide-in-left ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default SlideInLeftComponent;

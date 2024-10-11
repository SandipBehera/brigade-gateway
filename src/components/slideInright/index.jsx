import React, { useEffect, useRef, useState } from 'react';
// import '../styles.css'; // Make sure to import your CSS file

const SlideInRightComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  

  return (
    <div ref={elementRef} className={`slide-in-right ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default SlideInRightComponent;

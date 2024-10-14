import React, { useEffect, useRef } from "react";
import "./MouseAnimation.css";

const MouseAnimation = () => {
  const circlesRef = useRef([]); // Using ref to store DOM elements for the circles
  const coords = useRef({ x: 0, y: 0 }); // Using ref to store mouse coordinates

  useEffect(() => {
    const circles = circlesRef.current;

    const colors = [
      "#142850", "#0e3560", "#00436f", "#00527d", "#006089", "#007095", "#007f9e", "#008ea5", "#009eab", "#00adaf", "#00bdb1", "#04ccb1"
    ];

    // Initialize circle properties and assign colors
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    // Update mouse coordinates on movement
    const updateCoords = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };
    window.addEventListener("mousemove", updateCoords);

    // Animation function to move circles with a trailing effect
    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        // Smooth delay effect for each circle
        circle.x += (x - circle.x) * 0.3; // Smooth transition to new position
        circle.y += (y - circle.y) * 0.3;

        circle.style.transform = `translate(${circle.x - 12}px, ${circle.y - 12}px) scale(${(circles.length - index) / circles.length})`;

        x = circle.x;
        y = circle.y; // Update the next circle's target position to this circle's position
      });

      requestAnimationFrame(animateCircles); // Continue animation
    };

    animateCircles(); // Start the animation

    return () => {
      window.removeEventListener("mousemove", updateCoords); // Cleanup event listener on unmount
    };
  }, []);

  return (
    <div>
      {/* JSX for rendering the circle elements */}
      {Array.from({ length: 22 }).map((_, i) => (
        <div
          key={i}
          className="circle"
          ref={(el) => (circlesRef.current[i] = el)} // Store circle element in ref
        ></div>
      ))}
    </div>
  );
};

export default MouseAnimation;

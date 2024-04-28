import { useState, useEffect } from "react";

export const ImageSlideshow = ({ images, style, sub_image_class }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change images every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style}>
      <img
        className={sub_image_class ?? "mx-auto w-4/4"}
        alt="Gocab Transit"
        loading="lazy"
        src={images[currentImageIndex]}
      />
    </div>
  );
};

export function ClearLocalStorage() {
  useEffect(() => {
    localStorage.clear(); // Clear all local storage data
  }, []);

  return null; // No need to render any UI for this component
}

export const route = "https://gocab.vercel.app";
// export const route = "http://localhost:3000";

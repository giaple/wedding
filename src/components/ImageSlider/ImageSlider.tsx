import { useState, useEffect } from "react";
import "./ImageSlider.css";

interface ImageSliderProps {
  /** Danh sách ảnh hiển thị */
  images: string[];
  /** Bật/tắt tự động chuyển ảnh */
  autoPlay?: boolean;
  /** Thời gian delay mỗi ảnh (ms) */
  delay?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  autoPlay = false,
  delay = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tự động chuyển ảnh
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [autoPlay, delay, images.length]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const getVisibleImages = (): string[] => {
    if (isMobile) return [images[currentIndex]];
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push(images[index]);
    }
    return visible;
  };

  if (images.length === 0) return <p>No images provided.</p>;

  const visibleImages = getVisibleImages();

  return (
    <div className="image-slider">
      <div className="slider-container">
        <img
          src={visibleImages[0]}
          alt={`slide-${currentIndex}`}
          className="slider-image fade-in"
          onClick={nextImage}
          onDoubleClick={prevImage}
        />
      </div>
    </div>
  );
};

export default ImageSlider;

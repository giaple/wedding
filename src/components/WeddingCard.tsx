import { useEffect, useState } from "react";
import weddingBackground from "../assets/WeddingDay.gif";
import giaplinh from "../assets/Linh&Giap.gif";
import giap from "../assets/Giap.png";
import linh from "../assets/Linh.png";

const WeddingCard = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="page-wrapper">
        <div className="card">
          {isOpen ? null : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="is-mobile"
            >
              <p className="title">Thư mời cưới</p>
              <p className="name-title">Đình Giáp & Khánh Linh</p>
              <p className="title">Trân Trọng Kính Mời</p>
            </div>
          )}
          <div
            className={`card-packaging ${isOpen ? "is-open" : ""}`}
            id="card"
          >
            {/* Ảnh cover ban đầu */}
            <img
              src={weddingBackground}
              alt="Card cover"
              style={{ display: isOpen ? "none" : "block" }}
              onClick={() => setIsOpen(true)}
            />

            {/* Khi mở thiệp */}
            {isOpen ? (
              <div className="card-wrapper mobile-only">
                <img
                  src={giaplinh}
                  alt="Wedding invitation"
                  className={`center-gif ${isOpen ? "fade-in" : ""}`}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="card">
        {isOpen ? null : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <p className="title">Thư mời cưới</p>
            <p className="name-title">Đình Giáp & Khánh Linh</p>
            <p className="title">Trân Trọng Kính Mời</p>
          </div>
        )}
        <div
          className={`card-packaging ${isOpen ? `is-open` : "is-close"}`}
          id="card"
        >
          <img
            src={giaplinh}
            alt="Card cover"
            style={{
              display: isOpen ? "block" : "none",
            }}
          />
          <div className="card--first">
            <div className="card-wrapper front">
              <img
                src={weddingBackground}
                alt="Card cover"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            <div className="card-wrapper back">
              <img src={linh} alt="Inside left" />
            </div>
          </div>

          <div className="card--third">
            <div className="card-wrapper front">
              <img src={giaplinh} alt="Right cover" />
            </div>
            <div className="card-wrapper back">
              <img src={giap} alt="Inside right" />
              <div className="close" onClick={() => setIsOpen(!isOpen)}>
                ❌
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;

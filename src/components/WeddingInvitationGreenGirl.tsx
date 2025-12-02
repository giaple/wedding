import "./green.css";
import backgroundMusic from "../assets/background.mp3";
import musicIcon from "../assets/gif.gif";
import offMusicIcon from "../assets/png.png";
import { useEffect, useRef, useState } from "react";
import ImageSlider from "./ImageSlider/ImageSlider";

const WeddingInviationGreenGirl = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked by browser:", err);
        });
    }
  }, []);

  return (
    <>
      <div className="pageview">
        <div
          id="webcake-alert-msg"
          className="w-alert-message-wrapper"
          style={{
            display: "none",
            zIndex: "99999",
          }}
        ></div>
        <div id="w-1toiquem" className="com-section" data-section="">
          <div className="section-wrapper full-width full-height p-relative">
            <div className="section-background p-absolute full-width full-height"></div>
            <div className="section-container full-height p-relative">
              <div
                id="w-j6ac06mu"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">Mời Cưới</h2>
                </div>
              </div>
              <div
                id="w-3subauj7"
                className="com-image-block p-absolute cursor-pointer animation"
                style={{ display: isOpen ? "none" : "initial" }}
                onClick={() => {
                  setIsOpen(true);
                  togglePlay();
                }}
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div
                id="w-q1wlsumy"
                className="com-image-block p-absolute"
                style={{ display: isOpen ? "initial" : "none" }}
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div
                id="w-4aeii491"
                className="com-image-block p-absolute animation"
                style={{ display: isOpen ? "initial" : "none" }}
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div
                id="w-bnrugie4"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">THIỆP</h2>
                </div>
              </div>
              <div
                id="w-hoyb400n"
                className="com-text-block p-absolute"
                style={{
                  zIndex: isOpen ? 0 : 1,
                }}
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">
                    - NHẤP VÀO THIỆP ĐỂ MỞ -
                  </h2>
                </div>
              </div>
              <div
                id="w-dqyi2rbc"
                className="com-rectangle p-absolute"
                style={{ display: "initial" }}
              >
                <div className="rectangle-css full-mask-size mask-position full-height full-width"></div>
              </div>
              <div
                id="w-3udt7eao"
                className="com-image-block p-absolute cursor-pointer"
                style={{ display: isOpen ? "initial" : "none" }}
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div
                id="w-1qpgocgm"
                className="com-image-block p-absolute animation"
                style={{ display: isOpen ? "none" : "initial" }}
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div id="w-chgngsfo" className="com-image-block p-absolute">
                <div className="full-width full-height">
                  <div className="image-gradient-border"></div>
                  <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                    <div className="image-background p-absolute"></div>
                  </div>
                </div>
              </div>
              <div id="w-cvriqtir" className="com-image-block p-absolute">
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div id="w-rh0ij8au" className="com-image-block p-absolute">
                <div className="full-width full-height">
                  <div className="image-gradient-border"></div>
                  <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                    <div className="image-background p-absolute"></div>
                  </div>
                </div>
              </div>
              <div id="w-7s2xy9vd" className="com-image-block p-absolute">
                <div className="full-width full-height">
                  <div className="image-gradient-border"></div>
                  <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                    <div className="image-background p-absolute"></div>
                  </div>
                </div>
              </div>
              <div id="w-8cd27q3l" className="com-image-block p-absolute">
                <div className="full-width full-height">
                  <div className="image-gradient-border"></div>
                  <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                    <div className="image-background p-absolute"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-oob4nyp3"
                className="p-absolute group-auto-scroll sroll-size"
                style={{ display: isOpen ? "initial" : "none" }}
              >
                <div className="group-container">
                  <div
                    id="w-ohkl2lnj"
                    className="com-image-block p-absolute animation"
                  >
                    <div className="image-gradient-border"></div>
                    <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                      <div className="image-background p-absolute"></div>
                    </div>
                  </div>
                  <div
                    id="w-lfeb0egb"
                    className="com-text-block p-absolute animation"
                  >
                    <div className="text-block">
                      <h4 className="text-block-css full-width">Khánh Linh</h4>
                    </div>
                  </div>
                  <div id="w-cdlp31uy" className="p-absolute">
                    <div className="line-css full-width">
                      <div className="line-container"></div>
                    </div>
                  </div>
                  <div
                    id="w-19tqxf4g"
                    className="com-text-block p-absolute animation"
                  >
                    <div className="text-block">
                      <h3 className="text-block-css full-width">
                        10.01
                        <br />
                        2026
                        <br />
                      </h3>
                    </div>
                  </div>
                  <div
                    id="w-wkuu9jg6"
                    className="com-text-block p-absolute animation"
                  >
                    <div className="text-block">
                      <h4 className="text-block-css full-width">Đình Giáp</h4>
                    </div>
                  </div>
                  <div id="w-s0wpujoa" className="p-absolute">
                    <div className="line-css full-width">
                      <div className="line-container"></div>
                    </div>
                  </div>
                  <div
                    id="w-e7d1tx8k"
                    className="com-image-block p-absolute animation"
                  >
                    <div className="full-width full-height">
                      <div className="image-gradient-border"></div>
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-76hn3zct"
                className="com-image-block p-absolute cursor-pointer"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div id="w-o3vofznk" className="com-html-box p-absolute">
                <div className="frame-html-box full-width full-height">
                  <div id="wc-music">
                    <audio
                      id="wc-bg-music"
                      preload="auto"
                      loop={true}
                      playsInline={true}
                      ref={audioRef}
                    >
                      <source src={backgroundMusic} type="audio/mpeg" />
                    </audio>
                    <button
                      id="wc-music-toggle"
                      aria-label="Bật/tắt nhạc"
                      onClick={togglePlay}
                      style={{
                        position: "fixed",
                        left: "20px",
                        bottom: "20px",
                        width: "52px",
                        height: "52px",
                        border: "none",
                        borderRadius: "9999px",
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: "99999",
                        padding: 0,
                      }}
                    >
                      <img
                        id="wc-music-icon"
                        src={isPlaying ? musicIcon : offMusicIcon}
                        alt="music-icon"
                        style={{ width: "47px", height: "47px" }}
                      />
                    </button>
                    <div
                      id="wc-music-cover"
                      aria-hidden="true"
                      onClick={togglePlay}
                      style={{
                        position: "fixed",
                        left: "20px",
                        bottom: "20px",
                        width: "52px",
                        height: "52px",
                        borderRadius: "9999px",
                        background: "transparent",
                        cursor: "pointer",
                        zIndex: "100001",
                        touchAction: "manipulation",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-28wd2jg4" className="com-section" data-section="">
          <div className="section-wrapper full-width full-height p-relative">
            <div className="section-background p-absolute full-width full-height"></div>
            <div className="section-container full-height p-relative">
              <div id="w-8kjibpmq" className="p-absolute">
                <div className="full-width full-height">
                  <div className="line-css full-width">
                    <div className="line-container"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-3hbjzhq6"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">
                    Thư
                    <br />
                    Mời
                    <br />
                    Cưới
                    <br />
                  </h2>
                </div>
              </div>
              <div id="w-wlk3yclm" className="p-absolute">
                <div className="full-width full-height">
                  <div className="line-css full-width">
                    <div className="line-container"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-6dnci2bs"
                className="p-absolute group-auto-scroll sroll-size"
              >
                <div className="group-container">
                  <div id="w-yjsm9xd2" className="com-rectangle p-absolute">
                    <div className="rectangle-css full-mask-size mask-position full-height full-width"></div>
                  </div>
                  <div
                    id="w-1u5rhi6o"
                    className="com-image-block p-absolute animation"
                  >
                    <div className="image-gradient-border"></div>
                    <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                      <div className="image-background p-absolute"></div>
                    </div>
                  </div>
                  <div id="w-dh2fdsr6" className="com-rectangle p-absolute">
                    <div className="rectangle-css full-mask-size mask-position full-height full-width"></div>
                  </div>
                  <div id="w-1vrm5g0n" className="com-image-block p-absolute">
                    <div className="image-gradient-border"></div>
                    <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                      <div className="image-background p-absolute"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-gksl9w4l"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    NHÀ GÁI
                    <br />
                  </p>
                </div>
              </div>
              <div
                id="w-91jxhp0m"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    Quảng Phú, Đắk Lắk
                  </p>
                </div>
              </div>
              <div
                id="w-ig5jcswu"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    ÔNG PHAN VĂN TRUNG <br />
                    BÀ HOÀNG THỊ BẢY
                    <br />
                  </p>
                </div>
              </div>
              <div
                id="w-j8n1a9zw"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    NHÀ TRAI
                    <br />
                  </p>
                </div>
              </div>
              <div
                id="w-2hyi8ra3"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    An Phước, Đồng Nai
                  </p>
                </div>
              </div>
              <div
                id="w-bv74resi"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    ÔNG LÊ ĐÌNH CƯƠNG <br />
                    BÀ LÊ THỊ LEN
                    <br />
                  </p>
                </div>
              </div>
              <div
                id="w-32etj2r3"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">
                    Trân Trọng Báo Tin Lễ Vu Quy Của
                    <br />
                  </h2>
                </div>
              </div>
              <div
                id="w-6i7xa1kt"
                className="com-text-block p-absolute animation"
              >
                <div className="full-width full-height">
                  <div className="text-block">
                    <h1 className="text-block-css full-width">Phan Thị Khánh Linh</h1>
                  </div>
                </div>
              </div>
              <div
                id="w-giudke9b"
                className="com-text-block p-absolute animation"
              >
                <div className="full-width full-height">
                  <div className="text-block">
                    <h1 className="text-block-css full-width">
                      Lê Đình Giáp
                    </h1>
                  </div>
                </div>
              </div>
              <div
                id="w-ioujowzg"
                className="com-text-block p-absolute animation"
              >
                <div className="full-width full-height">
                  <div className="text-block">
                    <h1 className="text-block-css full-width">&amp;</h1>
                  </div>
                </div>
              </div>
              <div
                id="w-hs9njuu7"
                className="com-image-block p-absolute animation"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-u2qdu5go" className="com-section" data-section="">
          <div className="section-wrapper full-width full-height p-relative">
            <div className="section-background p-absolute full-width full-height"></div>
            <div className="section-container full-height p-relative">
              <div
                id="w-amfdze1w"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">
                    Trân Trọng Kính Mời
                    <br />
                  </h2>
                </div>
              </div>
              <div
                id="w-trta43bz"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    (Tức Ngày 16 Tháng 11 Năm Ất Tỵ)
                    <br />
                  </p>
                </div>
              </div>
              <div
                id="w-pdl931a6"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    Tại Tư Gia
                  </p>
                </div>
              </div>
              <div
                id="w-k8kl83qy"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    <span style={{ fontWeight: "bold" }}>Tháng 01</span>
                    <br />
                  </p>
                </div>
              </div>
              <div
                id="w-kbgnz2rp"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    2026
                    <br />
                  </p>
                </div>
              </div>
              <div id="w-s2av0vl0" className="p-absolute animation">
                <div className="full-width full-height">
                  <div className="line-css full-width">
                    <div className="line-container"></div>
                  </div>
                </div>
              </div>
              <div id="w-bifzmam8" className="p-absolute animation">
                <div className="full-width full-height">
                  <div className="line-css full-width">
                    <div className="line-container"></div>
                  </div>
                </div>
              </div>
              <div
                id="w-6amly90s"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    <span style={{ fontWeight: "bold" }}>
                      TIỆC MỪNG LỄ VU QUY
                    </span>
                  </p>
                </div>
              </div>
              <div
                id="w-rvjhix10"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    Vào Lúc 9h00 | Chủ Nhật
                  </p>
                </div>
              </div>
              <div
                id="w-0m3cmvaa"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    4
                    <br />
                  </p>
                </div>
              </div>
              <div
                id="w-2z4vbngp"
                className="com-image-block p-absolute animation"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div
                id="w-xd4gq2s2"
                className="com-image-block p-absolute animation"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div
                id="w-p4gatvnw"
                className="com-image-block p-absolute animation"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-frfn2a1z" className="com-section" data-section="">
          <div className="section-wrapper full-width full-height p-relative">
            <div className="section-background p-absolute full-width full-height"></div>
            <div className="section-container full-height p-relative">
              <div
                id="w-3m9ley3g"
                className="com-image-block p-absolute animation"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div
                id="w-q5ac8dqn"
                className="com-image-block p-absolute animation"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-gxpbejzi" className="com-section" data-section="">
          <div className="section-wrapper full-width full-height p-relative">
            <div className="section-background p-absolute full-width full-height"></div>
            <div className="section-container full-height p-relative">
              <div
                id="w-b8ao84la"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    Ea Pốk, Cư M'gar
                    <br />
                    Đắk Lắk
                    <br />
                  </p>
                </div>
              </div>
              <div
                id="w-8799m2jd"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    <span style={{ fontWeight: "700" }}>Tư Gia</span>
                    <br />
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/afWH3M5Qk3kPqreK8"
                title="Open link https://maps.app.goo.gl/afWH3M5Qk3kPqreK8"
                id="w-i7ym6cbi"
                className="com-button p-absolute cursor-pointer animation"
                style={{ transition: "0.3s" }}
              >
                <div className="button-css full-height full-width">
                  <span className="button-loader"></span>
                  <div className="button-text full-width u-select-none">
                    Xem Chỉ Đường
                  </div>
                </div>
              </a>
              <div id="w-4y6khmrv" className="com-rectangle p-absolute">
                <div className="rectangle-css full-mask-size mask-position full-height full-width"></div>
              </div>
              <div id="w-m1kk35d9" className="com-html-box p-absolute">
                <div className="frame-html-box full-width full-height">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d299.2278068622907!2d108.06155748242081!3d12.784261573889845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f9477642b6e3%3A0xa66abefa9fe044c7!2zVOG6oXAgaMOzYSBUaMO6eSBD4bqjbmg!5e1!3m2!1svi!2s!4v1764367155261!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{
                      border: 0,
                    }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div id="w-gpi1okjt" className="com-rectangle p-absolute">
                <div className="rectangle-css full-mask-size mask-position full-height full-width"></div>
              </div>
              <div
                id="w-t2sokzzh"
                className="com-image-block p-absolute animation"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div
                id="w-sr1oja6m"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">
                    Địa Điểm Tổ Chức
                    <br />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-pniputpo" className="com-section" data-section="">
          <div className="section-wrapper full-width full-height p-relative">
            <div className="section-background p-absolute full-width full-height"></div>
            <div className="section-container full-height p-relative">
              <div
                id="w-ytqzomid"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">Album hình cưới</p>
                </div>
              </div>
              <ImageSlider
                images={[
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359662/HT__4018_wxwo6o.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359661/HT__3955_lrtnda.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359661/HT__4001_qvngfn.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359660/HT__3791_wisnt4.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359660/HT__3874_fbdti8.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359660/HT__3809_myom6w.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359659/HT__3735_fipfwk.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359658/HT__3723_bstzg0.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359658/HT__3715_meoink.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359658/HT__3644_hlxaop.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359657/HT__3615_wc8t9f.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359656/HT__3540_q4fycc.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359656/HT__3406_gedfqb.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359656/HT__3421_drkiqi.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359656/HT__3562_xlmzwr.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359656/HT__3584_rldos0.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359653/HT__3154_qgyayh.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359653/HT__3265_tgv76m.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359653/HT__3336_wgn5vy.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359653/HT__3503_g8vpox.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359653/HT__3181_noki7e.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359653/HT__3519_rdnnjw.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359650/HT__3039_vljb33.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359650/HT__3468_bkdenb.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359650/HT__3088_ay5ksw.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359650/HT__3084_azz1zk.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359649/HT__3446_vemfkk.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359649/HT__3111_tqcjsf.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/c_fit,w_400/v1764359665/HT__4187_lq38o6.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/c_fit,w_400/v1764359664/HT__4175_xyfbsz.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/c_fit,w_400/v1764359664/HT__4181_mlma9d.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/c_fit,w_400/v1764359664/HT__4163_itkkxh.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/c_fit,w_400/v1764359663/HT__4140_fnws4n.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/c_fit,w_400/v1764359663/HT__4130_qe5i6d.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/c_fit,w_400/v1764359663/HT__4038_pzya7b.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/c_fit,w_400/v1764359663/HT__4150_rj4aul.jpg",
                  "https://res.cloudinary.com/dfixhupch/image/upload/v1764359662/HT__4076_j9mf5c.jpg",
                ]}
                autoPlay={true}
                delay={5000}
              />
            </div>
          </div>
        </div>
        <div id="w-1kaa9b1v" className="com-section" data-section="">
          <div className="section-wrapper full-width full-height p-relative">
            <div className="section-background p-absolute full-width full-height"></div>
            <div className="section-container full-height p-relative">
              <div id="w-sj86rf1m" className="com-image-block p-absolute">
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div id="w-pvtvxy0x" className="com-rectangle p-absolute">
                <div className="rectangle-css full-mask-size mask-position full-height full-width"></div>
              </div>
              <div
                id="w-iylwpged"
                className="com-image-block p-absolute animation"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
              <div
                id="w-ihlyqwez"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <p className="text-block-css full-width">
                    Rất hân hạnh được đón tiếp!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-__popup_default__" className="d-none popup-center">
          <div className="popup-wrapper p-absolute full-width full-height">
            <div className="popup-background p-absolute full-width full-height"></div>
            <div
              id="w-au0o7yap"
              className="com-rectangle p-absolute cursor-pointer"
            >
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>
            <div id="w-766uvdhg" className="com-rectangle p-absolute">
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>
            <div
              id="w-zbmg6glj"
              className="com-image-block p-absolute is-animation"
            >
              <div className="image-gradient-border"></div>
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute lazy"></div>
              </div>
            </div>
            <div
              id="w-ogbk63vj"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  Rất hân hạnh được đón tiếp!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="popup-backdrop"
        className="popup-backdrop full-width full-height d-none"
      ></div>
      <div
        id="lightbox"
        className="lightbox-backdrop full-width full-height d-none"
      ></div>
      <div id="login-popup" className="login-popup-wrapper">
        <div className="backdrop-login"></div>
        <div className="popup-default-login">
          <div className="popup-login-title">Alert</div>
          <div className="popup-login-content">Expired or Invalid Code!</div>
          <div className="popup-login-btn">OK</div>
        </div>
      </div>
    </>
  );
};

export default WeddingInviationGreenGirl;

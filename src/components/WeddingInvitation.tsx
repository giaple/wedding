import React from "react";

import png from "../assets/png.png";
import SlideUp from "../assets/jpeg.jfif";
import png1 from "../assets/png(1).png";
import png2 from "../assets/png(2).png";
import png3 from "../assets/png(3).png";
const WeddingInvitation = () => {
  return (
    <>
      <div className="pageview">
        <div
          id="webcake-alert-msg"
          className="w-alert-message-wrapper"
          style={{ display: "none", zIndex: 9999999 }}
        ></div>

        <div id="w-fzgynvqt" className="com-section" data-section="">
          <div className="section-wrapper full-width full-height p-relative">
            <div className="section-background p-absolute full-width full-height"></div>

            <div className="section-container full-height p-relative">
              <div id="w-ec95a8sb" className="com-html-box p-absolute">
                <div className="frame-html-box full-width full-height">
                  {/* HTML Box: Background fixed image */}
                </div>
              </div>

              <div
                id="w-fqeot956"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">Anh Tú</h2>
                </div>
              </div>

              <div
                id="w-cgnh3wg7"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">Thư Mời Cưới</h2>
                </div>
              </div>

              <div
                id="w-yeb0cos9"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">10.12.2025</h2>
                </div>
              </div>

              <div id="w-hosrp23p" className="p-absolute animation">
                <div className="line-css full-width">
                  <div className="line-container"></div>
                </div>
              </div>

              <div
                id="w-9uhtuh0v"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">Diệu Nhi</h2>
                </div>
              </div>

              <div
                id="w-i9zeyoc7"
                className="com-text-block p-absolute animation"
              >
                <div className="text-block">
                  <h2 className="text-block-css full-width">&amp;</h2>
                </div>
              </div>

              <div
                id="w-kl3zoe2o"
                className="com-image-block p-absolute cursor-pointer"
              >
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>

              <div id="w-nmhtyd8r" className="com-html-box p-absolute">
                <div className="frame-html-box full-width full-height">
                  {/* ====== AUDIO & TOGGLE (HTML Box) ====== */}
                  <audio
                    id="background-music"
                    src="https://statics.pancake.vn/web-media/5e/ee/bf/4a/afa10d3bdf98ca17ec3191ebbfd3c829d135d06939ee1f1b712d731d-w:0-h:0-l:2938934-t:audio/mpeg.mp3"
                    preload="none"
                    loop
                  ></audio>

                  <div
                    id="music-toggle"
                    title="Bật / Tắt nhạc"
                    aria-label="Bật / Tắt nhạc"
                    className="vibrating"
                  >
                    <img
                      id="play-icon"
                      src={png}
                      alt="Play"
                      width="44"
                      height="44"
                      decoding="async"
                      loading="lazy"
                      style={{ display: "none" }}
                    />
                    <img
                      id="pause-icon"
                      src="url('../assets/gif.gif')"
                      alt="Pause"
                      width="44"
                      height="44"
                      decoding="async"
                      loading="lazy"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
              </div>

              <div
                id="w-i0zsd5xn"
                className="p-absolute group-auto-scroll sroll-size animation"
              >
                <div className="group-container">
                  <div id="w-1tpnblan" className="com-image-block p-absolute">
                    <div className="image-gradient-border"></div>
                    <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                      <div className="image-background p-absolute"></div>
                    </div>
                  </div>

                  <div id="w-zg4swnhq" className="com-html-box p-absolute">
                    <div className="frame-html-box full-width full-height">
                      <div className="image-box">
                        <img
                          src={png1}
                          alt="Ảnh demo"
                          width="420"
                          height="800"
                        />
                      </div>
                    </div>
                  </div>

                  <div id="w-197qwgcd" className="com-html-box p-absolute">
                    <div className="frame-html-box full-width full-height">
                      <div className="flip-container">
                        <img
                          src={png2}
                          alt="Ảnh A"
                          className="flip-image flipped"
                          width="420"
                          height="800"
                        />
                      </div>
                    </div>
                  </div>

                  <div id="w-7cnlr510" className="com-html-box p-absolute">
                    <div className="frame-html-box full-width full-height">
                      {/* HTML Box: Slide image from bottom into frame (ease-out motion) */}
                      <div className="wc-slideup-unique">
                        <div className="frame">
                          <img
                            src={SlideUp}
                            alt="Ảnh slide up"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="w-g32k2xyy" className="com-html-box p-absolute">
                    <div className="frame-html-box full-width full-height">
                      <div className="image-box">
                        <img
                          src={png1}
                          alt="Ảnh demo"
                          width="420"
                          height="800"
                          className="delay-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div id="w-jacynrux" className="com-html-box p-absolute">
                    <div className="frame-html-box full-width full-height">
                      <div className="image-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: THAM DỰ LỄ THÀNH HÔN */}
      <div id="w-yh5ldc47" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div
              id="w-wl2qbi7u"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">
                  THAM DỰ LỄ THÀNH HÔN CỦA GIA ĐÌNH CHÚNG TÔI:
                  <br />
                </h2>
              </div>
            </div>

            <div
              id="w-3a3d52gz"
              className="com-text-block p-absolute animation"
            >
              <div className="full-width full-height">
                <div className="text-block">
                  <h1 className="text-block-css full-width">Nguyễn Anh Tú</h1>
                </div>
              </div>
            </div>

            <div
              id="w-r914idcz"
              className="com-text-block p-absolute animation"
            >
              <div className="full-width full-height">
                <div className="text-block">
                  <h1 className="text-block-css full-width">
                    Trần Thị Diệu Nhi
                  </h1>
                </div>
              </div>
            </div>

            <div
              id="w-0owxhsk7"
              className="com-text-block p-absolute animation"
            >
              <div className="full-width full-height">
                <div className="text-block">
                  <h1 className="text-block-css full-width">and</h1>
                </div>
              </div>
            </div>

            <div
              id="w-s606a2eu"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  Nhà Gái
                  <br />
                </p>
              </div>
            </div>

            <div
              id="w-shtltoai"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  ÔNG CẤN VĂN AN
                  <br />
                  BÀ NGUYỄN THỊ HẢI
                  <br />
                </p>
              </div>
            </div>

            <div
              id="w-zwbhm4q6"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  Nhà Trai
                  <br />
                </p>
              </div>
            </div>

            <div
              id="w-uhipmmv5"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  ÔNG CẤN VĂN AN
                  <br />
                  BÀ NGUYỄN THỊ HẢI
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: SAVE THE DATE + IMAGE BLOCKS */}
      <div id="w-8qsej9wi" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div
              id="w-0s7s798b"
              className="p-absolute group-auto-scroll sroll-size animation"
            >
              <div className="group-container">
                <div
                  id="w-8dulkk7j"
                  className="com-image-block p-absolute"
                ></div>
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>

              <div
                id="w-8zwd0gq9"
                className="p-absolute group-auto-scroll sroll-size animation"
              >
                <div className="group-container">
                  <div id="w-y3yfrcka" className="com-image-block p-absolute">
                    <div className="full-width full-height">
                      <div className="image-gradient-border"></div>
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute"></div>
                      </div>
                    </div>
                  </div>

                  <div id="w-gbh6ep9k" className="com-image-block p-absolute">
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
                id="w-nij0t8ub"
                className="p-absolute group-auto-scroll sroll-size animation"
              >
                <div className="group-container">
                  <div id="w-pyj5wz7n" className="com-image-block p-absolute">
                    <div className="full-width full-height">
                      <div className="image-gradient-border"></div>
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute"></div>
                      </div>
                    </div>
                  </div>

                  <div id="w-jth5db0d" className="com-image-block p-absolute">
                    <div className="full-width full-height">
                      <div className="image-gradient-border"></div>
                      <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                        <div className="image-background p-absolute"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="w-4kbug5i2" className="com-image-block p-absolute">
                <div className="image-gradient-border"></div>
                <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                  <div className="image-background p-absolute"></div>
                </div>
              </div>
            </div>

            <div
              id="w-v3yq44p9"
              className="p-absolute group-auto-scroll sroll-size animation"
            >
              <div className="group-container">
                <div id="w-my5xz6ei" className="com-text-block p-absolute">
                  <div className="text-block">
                    <h2 className="text-block-css full-width">10</h2>
                  </div>
                </div>

                <div id="w-u6akw7co" className="com-text-block p-absolute">
                  <div className="text-block">
                    <h2 className="text-block-css full-width">12</h2>
                  </div>
                </div>

                <div id="w-1hkxvsaa" className="com-text-block p-absolute">
                  <div className="text-block">
                    <h2 className="text-block-css full-width">/</h2>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="w-3f0p237p"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">Save The Date</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: TIỆC MỪNG LỄ THÀNH HÔN */}
      <div id="w-8nisv699" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div id="w-jkub6p6s" className="com-rectangle p-absolute">
              <div className="rectangle-css full-mask-size mask-position full-height full-width"></div>
            </div>

            <div
              id="w-mny38gs2"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">Thứ 4 - 18:00</p>
              </div>
            </div>

            <div
              id="w-hgwc339b"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">10.12.2025</p>
              </div>
            </div>

            <div
              id="w-azrgnszs"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  Nhằm Ngày 21 Tháng 10 Năm Ất Tỵ
                </p>
              </div>
            </div>

            <div
              id="w-zxns1lzw"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  Tại The ADORA Center
                </p>
              </div>
            </div>

            <div id="w-xy9f4dha" className="com-text-block p-absolute">
              <div className="text-block">
                <p className="text-block-css full-width">
                  TIỆC MỪNG LỄ THÀNH HÔN
                  <br />
                </p>
              </div>
            </div>

            <div id="w-mpt5hcaz" className="p-absolute animation">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: LỊCH & HÌNH TRÒN */}
      <div id="w-li7w1rbr" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div id="w-ygzgfqzg" className="com-rectangle p-absolute">
              <div className="rectangle-css full-mask-size mask-position full-height full-width"></div>
            </div>

            <div id="w-28vd0z80" className="com-image-block p-absolute">
              <div className="image-gradient-border"></div>
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute"></div>
              </div>
            </div>

            <div id="w-mulylbau" className="p-absolute">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>

            <div id="w-bftqzm5f" className="p-absolute">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>

            <div id="w-telqj4ow" className="p-absolute">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>

            <div
              id="w-fbcanalp"
              className="com-image-block p-absolute animation"
            >
              <div className="image-gradient-border"></div>
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute"></div>
              </div>
            </div>

            <div
              id="w-4co8x8k1"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">Tháng 12 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: GOOGLE MAPS */}
      <div id="w-0dde8qxu" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div id="w-on6m07bx" className="com-html-box p-absolute">
              <div className="frame-html-box full-width full-height">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.553673986311!2d106.68808435!3d10.8007089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529281040a431%3A0x7ff3572ff87b852a!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4sgLSBUaeG7h2MgY8aw4bubaSBEaWFtb25kIFBsYWNl!5e0!3m2!1svi!2s!4v1763148661261!5m2!1svi!2s"
                  width="600"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div
              id="w-eqx3ekfk"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  xxx, Phường xxx, Quận xxx, Hồ Chí Minh
                  <br />
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/h74YeGHcd1fHyv8g7"
              title="Open link https://maps.app.goo.gl/h74YeGHcd1fHyv8g7"
              id="w-r9prt6dk"
              className="com-button p-absolute cursor-pointer animation"
              style={{ transition: "0.3s" }}
            >
              <div className="button-css full-height full-width">
                <span className="button-loader"></span>
                <div className="button-text full-width u-select-none">
                  Xem Chỉ Đường Trên Google Maps
                </div>
              </div>
            </a>

            <div
              id="w-wntx4w4x"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">Địa Điểm Tổ Chức</p>
              </div>
            </div>

            <div
              id="w-bony5oxt"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  The ADORA Center
                  <br />
                </p>
              </div>
            </div>

            <div id="w-q239zepw" className="p-absolute">
              <div className="full-width full-height">
                <div className="line-css full-width">
                  <div className="line-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION: TIMELINE & DRESS CODE */}
      <div id="w-3jpvi3ly" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height lazy"></div>
          <div className="section-container full-height p-relative">
            <div id="w-sph7a80e" className="com-rectangle p-absolute">
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div id="w-tzxtm9pj" className="com-rectangle p-absolute">
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div
              id="w-ekg488bb"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">Time Line</h2>
              </div>
            </div>

            <div
              id="w-ei8lx609"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">Dress code</h2>
              </div>
            </div>

            <div
              id="w-sk97uo1x"
              className="com-rectangle p-absolute is-animation"
            >
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div
              id="w-2417o41y"
              className="com-rectangle p-absolute is-animation"
            >
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div
              id="w-kth4j2wq"
              className="com-rectangle p-absolute is-animation"
            >
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div
              id="w-h23taczp"
              className="com-rectangle p-absolute is-animation"
            >
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div id="w-qigm7v95" className="p-absolute is-animation">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>

            <div id="w-koiu54pt" className="p-absolute is-animation">
              <div className="line-css full-width">
                <div className="line-container"></div>
              </div>
            </div>

            <div id="w-qvm7s2ot" className="p-absolute">
              <div className="full-width full-height">
                <div className="line-css full-width">
                  <div className="line-container"></div>
                </div>
              </div>
            </div>

            <div id="w-065whf0z" className="com-rectangle p-absolute">
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div id="w-ppwx14ds" className="com-rectangle p-absolute">
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div id="w-8e92s9wm" className="com-rectangle p-absolute">
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div id="w-gx4420ix" className="com-rectangle p-absolute">
              <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
            </div>

            <div
              id="w-778clulb"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">17:30</h2>
              </div>
            </div>

            <div
              id="w-93r4y5g4"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">18:00</h2>
              </div>
            </div>

            <div
              id="w-3mnw0uv3"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">18:30</h2>
              </div>
            </div>

            <div
              id="w-6iai8hkd"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">21:30</h2>
              </div>
            </div>

            <div
              id="w-2xp5wdjd"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">Đón Khách</h2>
              </div>
            </div>

            <div
              id="w-zdkmzyvt"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">Chụp Ảnh</h2>
              </div>
            </div>

            <div
              id="w-lugut35k"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">Khai Tiệc</h2>
              </div>
            </div>

            <div
              id="w-8hfc8e2a"
              className="com-text-block p-absolute is-animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">Tiễn Khách</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: FORM XÁC NHẬN THAM DỰ */}

      {/* SECTION: NHIỀU ẢNH */}
      <div id="w-ve3j29zh" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div
              id="w-1zd7gutp"
              className="com-image-block p-absolute animation"
            >
              <div className="image-gradient-border"></div>
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute"></div>
              </div>
            </div>

            <div
              id="w-ibxp7o7m"
              className="com-image-block p-absolute animation"
            >
              <div className="image-gradient-border"></div>
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute"></div>
              </div>
            </div>

            <div
              id="w-za5q6n3r"
              className="com-image-block p-absolute animation"
            >
              <div className="image-gradient-border"></div>
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute"></div>
              </div>
            </div>

            <div
              id="w-jd4xh8jy"
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

      <div id="w-ww9w4n3i" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div
              id="w-afrqv1j2"
              className="com-image-block p-absolute animation"
            >
              <div className="image-gradient-border"></div>
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute"></div>
              </div>
            </div>

            <div
              id="w-712glnp4"
              className="com-image-block p-absolute animation"
            >
              <div className="image-gradient-border"></div>
              <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
                <div className="image-background p-absolute"></div>
              </div>
            </div>

            <div
              id="w-t7zoid0w"
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

      {/* SECTION: GALLERY */}
      <div id="w-pet7zq4u" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div id="w-8f240uev" className="com-gallery p-absolute">
              <div className="gallery-wrapper full-width full-height p-absolute">
                <div className="gallery-view p-absolute">
                  <div
                    className="gallery-view-item p-absolute"
                    data-index="0"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute"
                    data-index="1"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute"
                    data-index="2"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute"
                    data-index="3"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute"
                    data-index="4"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute"
                    data-index="5"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute"
                    data-index="6"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute"
                    data-index="7"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute active"
                    data-index="8"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute lazy"
                    data-index="9"
                  ></div>
                  <div
                    className="gallery-view-item p-absolute lazy"
                    data-index="10"
                  ></div>

                  <div className="gallery-view-icon-next">
                    <img
                      src="../assets/ce7bea1db3f2c535a89a2c99988aeba8d3a361b2c72c9d08950d10e7.svg"
                      alt="navigation"
                    />
                    <div className="icon-next"></div>
                  </div>

                  <div
                    className="gallery-view-icon-prev"
                    style={{ display: "block" }}
                  >
                    <img
                      src="../assets/41806a12b05813bfc36f3ad3d1a580aa060a9d8f1736cc38e197a61f.svg"
                      alt="navigation"
                    />
                    <div className="icon-prev"></div>
                  </div>
                </div>

                <div className="gallery-controls">
                  <div className="gallery-scroll full-height">
                    <div
                      className="gallery-controls-wrap"
                      style={{ transform: "translateX(-521px)" }}
                    >
                      <div
                        className="gallery-controls-item"
                        data-index="0"
                      ></div>
                      <div
                        className="gallery-controls-item"
                        data-index="1"
                      ></div>
                      <div
                        className="gallery-controls-item"
                        data-index="2"
                      ></div>
                      <div
                        className="gallery-controls-item"
                        data-index="3"
                      ></div>
                      <div
                        className="gallery-controls-item"
                        data-index="4"
                      ></div>
                      <div
                        className="gallery-controls-item"
                        data-index="5"
                      ></div>
                      <div
                        className="gallery-controls-item"
                        data-index="6"
                      ></div>
                      <div
                        className="gallery-controls-item"
                        data-index="7"
                      ></div>
                      <div
                        className="gallery-controls-item active"
                        data-index="8"
                      ></div>
                      <div
                        className="gallery-controls-item"
                        data-index="9"
                      ></div>
                      <div
                        className="gallery-controls-item"
                        data-index="10"
                      ></div>
                    </div>
                  </div>

                  <div className="gallery-controls-icon-next">
                    <img
                      src="../assets/ce7bea1db3f2c535a89a2c99988aeba8d3a361b2c72c9d08950d10e7.svg"
                      alt="navigation"
                    />
                    <div className="control-next"></div>
                  </div>

                  <div className="gallery-controls-icon-prev">
                    <img
                      src="../assets/41806a12b05813bfc36f3ad3d1a580aa060a9d8f1736cc38e197a61f.svg"
                      alt="navigation"
                    />
                    <div className="control-prev"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: LỜI CẢM ƠN CUỐI */}
      <div id="w-1kyvmtv5" className="com-section" data-section="">
        <div className="section-wrapper full-width full-height p-relative">
          <div className="section-background p-absolute full-width full-height"></div>
          <div className="section-container full-height p-relative">
            <div
              id="w-80wcf9fe"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <p className="text-block-css full-width">
                  Rất Hân Hạnh Được Đón Tiếp!
                </p>
              </div>
            </div>

            <div
              id="w-eyju40b5"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">Anh Tú</h2>
              </div>
            </div>

            <div
              id="w-9bqblrni"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">10.12.2025</h2>
              </div>
            </div>

            <div
              id="w-snje5z2w"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">Diệu Nhi</h2>
              </div>
            </div>

            <div
              id="w-5gqpjann"
              className="com-text-block p-absolute animation"
            >
              <div className="text-block">
                <h2 className="text-block-css full-width">&amp;</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: FOOTER + LINK INFO */}

      {/* POPUP: THANK YOU */}
      <div id="w-__popup_default__" className="d-none popup-center">
        <div className="popup-wrapper p-absolute full-width full-height">
          <div className="popup-background p-absolute full-width full-height"></div>

          <div
            id="w-au0o7yap"
            className="com-rectangle p-absolute cursor-pointer"
          >
            <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
          </div>

          <div id="w-63tws5md" className="com-image-block p-absolute">
            <div className="image-gradient-border"></div>
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute lazy"></div>
            </div>
          </div>

          <div id="w-fvc92ffz" className="com-text-block p-absolute">
            <div className="text-block">
              <p className="text-block-css full-width">Thank You!</p>
            </div>
          </div>

          <div
            id="w-f4xg0wvk"
            className="com-text-block p-absolute is-animation"
          >
            <div className="text-block">
              <h2 className="text-block-css full-width">
                Cảm Ơn Quý Khách Đã Phản Hồi,
                <br />
                Rất Hân Hạnh Được Đón Tiếp!
                <br />
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP: CHUYỂN KHOẢN / MBBANK */}
      <div id="w-zx9hblwe" className="d-none popup-center">
        <div className="popup-wrapper p-absolute full-width full-height">
          <div className="popup-background p-absolute full-width full-height"></div>

          <div
            id="w-i0ah9n3z"
            className="com-rectangle p-absolute cursor-pointer"
          >
            <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
          </div>

          <div id="w-gh1e0rp1" className="com-rectangle p-absolute">
            <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
          </div>

          <div id="w-a2w95ir5" className="com-image-block p-absolute">
            <div className="image-gradient-border"></div>
            <div className="image-block-css p-relative full-width full-height full-mask-size mask-position">
              <div className="image-background p-absolute lazy"></div>
            </div>
          </div>

          <div id="w-nwf9nc12" className="com-rectangle p-absolute">
            <div className="rectangle-css full-mask-size mask-position full-height full-width lazy"></div>
          </div>

          <div id="w-vobk8m2o" className="com-text-block p-absolute">
            <div className="text-block">
              <h4 className="text-block-css full-width">
                MBBANK
                <br />
                NGUYEN TAN DAT
                <br />
                8838683860
                <br />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingInvitation;

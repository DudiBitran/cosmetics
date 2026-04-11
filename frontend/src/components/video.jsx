import "../style/VideoPlayer.css";
import { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";

import { useMemo } from "react";
import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";

const plyrOptions = {
  ratio: "16:9",
  fullscreen: { enabled: true, iosNative: true },
  keyboard: { focused: true, global: false },
  tooltips: { controls: true, seek: true },
  autoplay: true,
  muted: true,
  hideControls: true,
  clickToPlay: true,
  controls: [
    "play-large",
    "play",
    "progress",
    "current-time",
    "duration",
    "mute",
    "volume",
    "fullscreen",
  ],
};

function Video({ title, video, type, header }) {
  const source = useMemo(
    () => ({
      type: "video",
      sources: [{ src: video, type }],
    }),
    [video, type],
  );

  useEffect(() => {
    const video = document.querySelector("video");

    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className="video-section"
      role="region"
      aria-labelledby="landing-video-heading"
    >
      <div className="video-section__head">
        <h2 id="landing-video-heading" className="video-section__title">
          {header}
        </h2>
        <p className="video-section__lede">
          <FaArrowDown style={{ fontSize: "28px" }} />
        </p>
      </div>

      <div className="video-showcase">
        <div className="video-showcase__glow" aria-hidden />
        <div className="video-showcase__ring" aria-hidden />
        <div className="video-player-shell">
          <Plyr
            source={source}
            options={plyrOptions}
            preload="metadata"
            playsInline
            title={title}
          />
        </div>
      </div>
    </div>
  );
}

export default Video;

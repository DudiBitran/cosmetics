import "../style/video.css";
function Video() {
  return (
    <div className="video-section">
      <span className="video-badge">צפי בתוצאה אמיתית</span>
      <div className="video-overlay">
        <button type="button" className="play-btn" aria-label="ניגון סרטון תדמית">
          <span className="play-icon" />
        </button>
      </div>
    </div>
  );
}

export default Video;

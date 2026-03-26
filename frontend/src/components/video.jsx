import "../style/video.css";
import videoFile from "../assets/video.mp4";
function Video() {
  return (
    <div className="video-section">
      <span className="video-badge">צפי בתוצאה אמיתית</span>
      <video className="video-player" controls playsInline poster="">
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;

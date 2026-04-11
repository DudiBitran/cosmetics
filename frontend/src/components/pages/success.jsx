import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Video from "../video";
import "../../style/success.css";
import videoMov from "../../assets/ten_mistakes.mov";
function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.submitted) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <div>
      <h1>נרשמת בהצלחה</h1>
      <p>הפרטים נקלטו בהצלחה, אחזור אליך בקרוב</p>
      <div>
        <Video
          title="ten mistakes video"
          videoMov={videoMov}
          type="video/quicktime"
          header="עד שאני חוזרת אלייך בואי תצפי בסרטון הבא"
        />
      </div>
    </div>
  );
}

export default SuccessPage;

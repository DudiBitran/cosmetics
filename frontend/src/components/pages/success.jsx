import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Video from "../video";
import "../../style/success.css";

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
          video="https://res.cloudinary.com/durmd6voq/video/upload/v1775929905/Ten_Mistakes_bckdvn.mp4"
          type="video/mp4"
          header="עד שאני חוזרת אלייך בואי תצפי בסרטון הבא"
        />
      </div>
    </div>
  );
}

export default SuccessPage;

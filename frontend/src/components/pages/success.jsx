import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../../style/success.css";
function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.submitted) {
      navigate("/", { replace: true });
    }
  }, []);
  return (<div><h1>נרשמת בהצלחה</h1>
  <p>הפרטים נקלטו בהצלחה, אחזור אליך בקרוב</p>
  </div>);
}

export default SuccessPage;

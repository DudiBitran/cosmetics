import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "../style/scrollButton.css";

function ScrollToLeadFormButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("leadform");

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!visible) return null;

  return (
    <button className="scroll-btn" onClick={scrollToForm}>
      <FaArrowUp />
    </button>
  );
}

export default ScrollToLeadFormButton;

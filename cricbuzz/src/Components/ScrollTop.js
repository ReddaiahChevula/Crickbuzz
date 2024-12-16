import React,{useEffect,useState} from "react";
import { FaArrowUp } from "react-icons/fa6";

const Scrolltop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return(
    <>
     <div className="scroll_top">
     <span
      style={{ display: showScrollTopButton ? "block" : "none" }}
      className="fw-bold p-2 rounded-3 text-center rounded-5 px-3 topscroll"
      onClick={ScrollTop}
    >
      Move to top <FaArrowUp size={20} />
    </span>
     </div>
    </>
  )
}

export default Scrolltop;
import React, {useEffect} from "react";
import "./Top.scss";

export default function Top() {
  function TopEvent() {
    // Scroll to top
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    function scrollFunction() {
      const btn = document.getElementById("topButton");
      if (!btn) return; // ✅ Prevent error if button not in DOM

      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        btn.style.visibility = "visible";
      } else {
        btn.style.visibility = "hidden";
      }
    }

    // Add listeners
    window.addEventListener("scroll", scrollFunction);
    window.addEventListener("load", scrollFunction);

    // Run once immediately (in case already scrolled)
    scrollFunction();

    return () => {
      // ✅ Cleanup to avoid memory leaks & errors
      window.removeEventListener("scroll", scrollFunction);
      window.removeEventListener("load", scrollFunction);
    };
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}

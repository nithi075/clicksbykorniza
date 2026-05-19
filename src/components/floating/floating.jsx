import { useState } from "react";
import "./floating.css";
import OverlayForm from "../OverlayForm/OverlayForm";

export default function FloatingChat() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* =========================================
          FLOATING CONTAINER
      ========================================= */}
      <div className="floating-container">
        {/* =========================================
            PREMIUM BOOK NOW BUTTON
        ========================================= */}
        <button
          className="floating-chat-glass"
          onClick={() => setShowForm(true)}
        >
          {/* LUXURY SHIMMER OVERLAY */}
          <span className="shimmer-effect"></span>

          <span className="chat-label">Book Now</span>
        </button>

        {/* BACKGROUND AMBIENT GLOW */}
        <div className="floating-glow"></div>
      </div>

      {/* =========================================
          OVERLAY FORM
      ========================================= */}
      {showForm && <OverlayForm setShowForm={setShowForm} />}
    </>
  );
}
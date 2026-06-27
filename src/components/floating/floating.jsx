import "./floating.css";
import { useNavigate } from "react-router-dom";

export default function FloatingChat() {

  const navigate = useNavigate();

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
          onClick={() => navigate("/book-event")}
        >

          {/* LUXURY SHIMMER OVERLAY */}

          <span className="shimmer-effect"></span>

          <span className="chat-label">
            Book Now
          </span>

        </button>

        {/* BACKGROUND AMBIENT GLOW */}

        <div className="floating-glow"></div>

      </div>
    </>
  );
}

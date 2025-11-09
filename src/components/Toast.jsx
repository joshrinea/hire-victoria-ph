import { useEffect, useState } from "react";

export default function Toast({
  message,
  type = "success",
  show,
  onClose,
  duration = 3000,
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
        setTimeout(onClose, 300);
      }, duration);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [show, duration, onClose]);

  if (!show && !animate) return null;

  const bgColor =
    type === "success" ? "bg-success text-white" : "bg-danger text-white";

  return (
    <div
      className={`toast align-items-center show position-fixed top-0 end-0 m-3 ${bgColor} toast-animate ${
        animate ? "slide-in" : "slide-out"
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{
        zIndex: 9999,
        minWidth: "250px",
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <div className="d-flex">
        <div className="toast-body fw-medium">{message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          onClick={() => {
            setAnimate(false);
            setTimeout(onClose, 300);
          }}
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

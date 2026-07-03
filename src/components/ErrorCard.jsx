import styles from "./ErrorCard.module.css";
import { FaTriangleExclamation, FaArrowRotateRight } from "react-icons/fa6";

function ErrorCard({ message, onRetry }) {
  return (
    // role="alert" interrupts screen readers right away —
    // appropriate here because the user needs to know now
    <div className={styles.card} role="alert">
      <FaTriangleExclamation className={styles.icon} />

      <h3>Oops!</h3>
      <p>{message}</p>
      <small>Please check the city name and try again.</small>

      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          <FaArrowRotateRight />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
}

export default ErrorCard;
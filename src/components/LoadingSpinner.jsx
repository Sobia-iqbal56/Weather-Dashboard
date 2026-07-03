import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    // role="status" + aria-live="polite" together tell screen
    // readers "something is loading" without interrupting them
    <div className={styles.spinnerContainer} role="status" aria-live="polite">
      <div className={styles.spinner}></div>

      <p className={styles.text}>Loading weather...</p>
    </div>
  );
}

export default LoadingSpinner;
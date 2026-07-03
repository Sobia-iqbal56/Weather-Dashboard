import styles from "./DetailCard.module.css";

// `delay` staggers each card's entrance animation so they
// don't all pop in at the exact same instant — small detail,
// big difference in how "polished" it feels.
function DetailCard({ title, value, delay = 0 }) {
  return (
    <div className={styles.card} style={{ "--delay": `${delay}s` }}>
      <p className={styles.title}>{title}</p>
      <h3 className={styles.value}>{value}</h3>
    </div>
  );
}

export default DetailCard;
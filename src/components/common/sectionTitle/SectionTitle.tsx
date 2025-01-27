import styles from './SectionTitle.module.css';

function SectionTitle({ title }: { title: string }) {
  return (
    <div className={styles.sectionTitle}>
      <h2 className="text-center">{title}</h2>
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
      <span className={styles.line4}></span>
    </div>
  )
}

export default SectionTitle

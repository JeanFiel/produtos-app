import styles from "./styles.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>Produtos</li>
        <li className={styles.menuItem}>Contato</li>
      </ul>
    </nav>
  );
}

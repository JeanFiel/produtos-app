import styles from "./styles.module.css";

export default function Menu() {
  return (
    <nav className={styles.menuList}>
      <a href="#lancamentos" className={styles.menuItem}>
        Lançamentos
      </a>
      <a href="#linha-bateria" className={styles.menuItem}>
        Linha Bateria
      </a>
      <a href="#linha-eletrica" className={styles.menuItem}>
        Linha Elétrica
      </a>
      <a href="#jardim-floresta" className={styles.menuItem}>
        Jardim/Floresta
      </a>
      <a href="#limpeza-profissional" className={styles.menuItem}>
        Limpeza Profissional
      </a>
      <a href="#acessorios" className={styles.menuItem}>
        Acessórios
      </a>
      <a href="/contato" className={styles.menuItem} >Contato</a>
    </nav>
  );
}

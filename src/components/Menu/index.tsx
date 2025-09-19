import styles from "./styles.module.css";

export default function Menu() {
  return (
    <nav className={styles.menuList}>
      <a href="#lancamentos" className={styles.menuItem}>
        Lançamentos
      </a>
      <a href="#Videogames" className={styles.menuItem}>
        Videogames
      </a>
      <a href="#Notebooks" className={styles.menuItem}>
        Notebooks
      </a>
      <a href="#Periféricos" className={styles.menuItem}>
        Periféricos
      </a>
      <a href="#limpeza e Manutenção" className={styles.menuItem}>
        Limpeza e Manutenção
      </a>
      <a href="/adicionarProduto" className={styles.menuItem}>
        Adicionar Produto
      </a>
      <a href="/contato" className={styles.menuItem} >Contato</a>
    </nav>
  );
}

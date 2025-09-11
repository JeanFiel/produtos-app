import Logo from "@/components/Logo";
import Menu from "../Menu";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <h1 className={styles.titleHeader}></h1>
      <Menu />
    </header>
  );
}

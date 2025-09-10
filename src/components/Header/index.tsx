type Props = {
  title: string;
};

import Logo from "@/components/Logo";
import Menu from "../Menu";
import styles from "./styles.module.css";

export default function Header(props: Props) {
  return (
    <header className={styles.header}>
      <Logo />
      <h1 className={styles.titleHeader}>{props.title}
        OS CARA TÃO NO TETO
      </h1>
      <Menu />
    </header>
  );
}

import styles from "./styles.module.css";

export default function Logo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles.logo}
      src="/imgs/logoheader.png"
      alt="Makita logo"
      width={200}
      height={50}
    />
  );
}

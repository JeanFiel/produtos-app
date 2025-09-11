/* eslint-disable @next/next/no-img-element */

import styles from "./styles.module.css";

type Props = {
  nome: string;
  fotoUrl: string;
  preco: number;
};

export default function ProductCard(props: Props) {
  return (
    <li className={styles.produto}>
      <div className={styles.imagemproduto}>
        <img
          src={props.fotoUrl}
          alt={props.nome}
          width={260}
          height={260}
          className={styles.img}
        />
      </div>

      <h3 className={styles.nomeproduto}>{props.nome}</h3>

      <div className={styles.footer}>
        <span className={styles.precoproduto}>R$ {props.preco}</span>
        <button className={styles.button}>Comprar</button>
      </div>

      <div className={styles.tooltipContainer}>
        <span className={styles.tooltipText}>Promoção!</span>
      </div>
    </li>
  );
}

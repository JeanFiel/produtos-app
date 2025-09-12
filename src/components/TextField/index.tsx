'use client';
import { ChangeEvent } from "react";
import styles from "./styles.module.css";

type Props = {
  label: string;
  type: "text" | "email";
  multiline?: boolean;
  onChange?(texto: string): void;
};

export default function Textfield(props: Props) {

    // const [texto, setTexto] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // setTexto(e.target.value);
    
    if(props.onChange){
        props.onChange(e.target.value);
    }
  }

  return (
    <div className={styles.root}>

      <label className={styles.label}>{props.label}
      {props.multiline ? (
        <textarea
          className={styles.textarea}
          placeholder={props.label}
        />
      ) : (
        <input
          className={styles.input}
          type={props.type}
          placeholder={props.label}
          onChange={handleChange}
        />
      )}
      
    </label>
    </div>
  );
}
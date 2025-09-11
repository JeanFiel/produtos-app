import Textfield from "@/components/TextField";
import styles from "./styles.module.css"
export default function Contato(){
    return(
        <> 
        <h1 className={styles.h1}>Contato</h1>
        <form action="">
            <Textfield
            label="Nome"
            type="text"
            multiline={false}
            />
            <Textfield
            label="email"
            type="email"
            multiline={false}
            />
            <Textfield
            label="Assunto"
            type="text"
            multiline={true}
            />

            <button>Enviar</button>
        </form>
        </>
    );
}
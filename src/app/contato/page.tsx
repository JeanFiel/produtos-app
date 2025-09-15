'use client';

import Textfield from "@/components/TextField";
import styles from "./styles.module.css";
import Header from "@/components/Header";


export default function Contato() {

    let nome = "";
    let email = "";
    let assunto = "";
    let mensagem = "";

    function botaoEnviarOnclick() {

        alert(`Nome: ${nome}\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`);
    }

    function handleNomeChange(texto: string) {
        nome = texto;
    }

    function handleEmailChange(texto: string) {
        email = texto;
    }

    function handleAssuntoChange(texto: string) {
        assunto = texto;
    }

    function handleMensagemChange(texto: string) {
        mensagem = texto;
    }


    return (
        <>
        <div className={styles.container}>
            <h1 className={styles.title}>Contato</h1>
            <form className={styles.form}>
                <Textfield
                    label="Nome"
                    type="text"
                    multiline={false}
                    onChange={handleNomeChange}
                    />
                <Textfield
                    label="Email"
                    type="email"
                    multiline={false}
                    onChange={handleEmailChange}
                    />
                <Textfield
                    label="Assunto"
                    type="text"
                    multiline={false}
                    onChange={handleAssuntoChange}
                    value="Texto padrão"
                    />
                <Textfield
                    label="Mensagem"
                    type="text"
                    multiline={true}
                    onChange={handleMensagemChange}
                    />

                <button 
                    className={styles.button} 
                    onClick={botaoEnviarOnclick}
                    >
                    Enviar
                    </button> 
                </form>
            </div>
                    </>
        );
}
    


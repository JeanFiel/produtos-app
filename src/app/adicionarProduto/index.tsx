"use client";

import React, { useState } from "react";
import Textfield from "@/components/TextField";
import styles from "./styles.module.css";

export default function AdicionarProduto() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("Texto padrão");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(
      `Nome: ${nome}\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`
    );
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // para um servidor ou API, se necessário.
    // Após o envio, você pode limpar os campos do formulário, se desejar:
    setNome("");
    setEmail("");
    setAssunto("Texto padrão");
    setMensagem("");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contato</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Textfield
          label="Nome do Produto"
          type="text"
          multiline={false}
          value={nome}
          onChange={setNome}
        />

        <Textfield
          label="Email"
          type="email"
          multiline={false}
          value={email}
          onChange={setEmail}
        />

        <Textfield
          label="Assunto"
          type="text"
          multiline={false}
          value={assunto}
          onChange={setAssunto}
        />

        <Textfield
          label="Mensagem"
          type="text"
          multiline={true}
          value={mensagem}
          onChange={setMensagem}
        />

        <button className={styles.button} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

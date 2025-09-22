"use client";
import React, { useState } from "react";
import Textfield from "../TextField";
import styles from "./styles.module.css";
import axios from "axios";
import Produto from "@/models/produto";

type Props = {
  onSave(produto: Produto): void;
};



export default function ProductForm(props: Props) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [fotoUrl, setImagem] = useState("");

  function cadastrarProduto(e: React.FormEvent) {
    e.preventDefault();
    props.onSave({
      nome,
      preco: parseFloat(preco),
      fotoUrl,
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastrar novo Produto</h1>

      <form className={styles.form} onSubmit={cadastrarProduto}>
        <Textfield
          label="Nome do Produto"
          type="text"
          multiline={false}
          value={nome}
          onChange={setNome}
        />
        <Textfield
          label="Preço"
          type="number"
          multiline={false}
          value={preco}
          onChange={setPreco}
        />
        <Textfield
          label="Imagem (URL)"
          type="url"
          multiline={false}
          value={fotoUrl}
          onChange={setImagem}
        />

        <button className={styles.button} type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

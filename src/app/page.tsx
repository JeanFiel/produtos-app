'use client';
import "./page.css";
import ProductList from "@/components/ProductList";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import ProductForm from "@/components/ProductForm";
import Produto from "@/models/produto";

export default function Home() {

  const [produtos, setProdutos] = useState([])
  
  const [isLoading, setIsLoading] = useState(false);

  function sucesso(response: AxiosResponse) {
        setProdutos(response.data);
  }

  function falha() {
    alert("Falhou")
  }

  function todoCaso(){
    setIsLoading(false);
  }
  
  function handleSave(produto: Produto) {
    setIsLoading(true);
    axios
    .post("https://produtos-server.onrender.com/api/produtos", produto)
    .then(_res => loadProdutos())
    .catch(err => console.log("Erro ao cadastrar:", err))
    .finally(() => setIsLoading(false));
  }

  function loadProdutos(){
    setIsLoading(true);
    axios.get("https://produtos-server.onrender.com/api/produtos")
    .then(sucesso)
    .catch(falha)
    .finally(todoCaso);
  } 
  
  useEffect(loadProdutos, []);

  return ( 
    <>    
       {(isLoading) && (<Loading />)}
         <ProductList produtos = {produtos}/>
          <ProductForm onSave={handleSave}/>
    </>
  );
}

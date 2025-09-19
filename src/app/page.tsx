'use client';
import "./page.css";
import ProductList from "@/components/ProductList";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

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
    </>
  );
}

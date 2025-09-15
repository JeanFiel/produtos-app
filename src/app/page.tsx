'use client';
import "./page.css";
import produtos from "@/mocks/produtos";
import ProductList from "@/components/ProductList";
import axios from "axios";

export default function Home() {

  function sucesso() {
    alert("Deu certo");
  }

  function falha() {
    alert("ERRO 404 - NOT FOUND!");
  }


  axios.get("http://10.60.46.55:4000/api/produto")
  .then(sucesso)
  .catch(falha)
  .finally();
  

  return ( 
    <>
    
         <ProductList produtos = {produtos}/>
    </>
  );
}

import Produto from "@/models/produto";
import "./page.css";
import ProductCard from "@/components/productCard";
import produtos from "@/mocks/produtos";
import ProductList from "@/components/productList";

export default function Home() {
 

  return ( 
    <>
      <h1>Produtos Makita</h1>
      <ProductList produtos = {produtos}/>
    </>
  );
}

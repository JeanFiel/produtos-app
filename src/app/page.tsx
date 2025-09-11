import "./page.css";
import produtos from "@/mocks/produtos";
import ProductList from "@/components/ProductList";
import Header from "@/components/Header";


export default function Home() {

  return ( 
    <>
    
    <Header />

      <ProductList produtos = {produtos}/>
    </>
  );
}

import Produto from "@/models/produto";
import "./page.css";
import ProductCard from "@/components/productCard";
import produtos from "@/mocks/produtos";

export default function Home() {
  function mapear(produto: Produto){
    return(
      <ProductCard
        key={produto.id}
        nome={produto.nome}
        fotoUrl={produto.fotoUrl}
        preco={produto.preco}
      />
    );
  }

  return ( 
    <>
      <h1>Eletrônicos Apple e Samsung</h1>
      <ul className="produtos">
        {produtos.map(mapear)}
      </ul>
    </>
  );
}

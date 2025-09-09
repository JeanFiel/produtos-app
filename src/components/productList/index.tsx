import Produto from "@/models/produto";
import ProductCard from "../productCard";

type Props = {
    produtos: Produto[];
}
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
function ProductList(props: Props){
    return(
        <>
        <ul className="produtos">
        {props.produtos.map(mapear)}
      </ul>
        </>
    );
}

export default ProductList

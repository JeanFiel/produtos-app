import Produto from "@/models/produto";
import ProductCard from "../ProductCard";
import styles from "./styles.module.css";

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
        <ul className={styles.productList}>
        {props.produtos.map(mapear)}
      </ul>
        </>
    );
}

export default ProductList

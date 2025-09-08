type Props = {
    nome: string;
    fotoUrl: string;
    preco: number;
    
  }

export default function ProductCard(props: Props) {
    return (
        <li className="produto">
            <span className="nomeproduto">{props.nome}</span>
            <img className="imagemproduto" src={props.fotoUrl} alt={props.nome} style={{ width: 256, height: "auto" }} />
            <span className="precoproduto">Preço: R$ {props.preco}</span>
        </li>
    );
}

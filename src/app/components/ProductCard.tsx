import Link from "next/link";
import { Product } from "./../types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="cardImage"
      />

      <div className="cardBody">
        <span className="badge">{product.category}</span>

        <h2>{product.title}</h2>

        <p className="price">{product.price.toFixed(2)}€</p>

        <Link href={`/product/${product.id}`} className="detailButton">
          Ver detalles
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
import ContainerBackHome from "../../components/ContainerBackHome";
import SectionContainer from "../../components/SectionContainer";
import { getProductById } from "./../../lib/api/product";

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <main className="container">
      <ContainerBackHome>
        <SectionContainer>
          <div className="detail">
            <div className="detailGallery">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="detailMainImage"
              />

              <div className="detailImages">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="detailThumb"
                  />
                ))}
              </div>
            </div>

            <div className="detailInfo">
              <span className="badge">{product.category}</span>
              <h1>{product.title}</h1>

              <p className="detailDescription">{product.description}</p>

              <p>
                <strong>Marca:</strong> {product.brand || "No disponible"}
              </p>

              <p>
                <strong>Valoración:</strong> {product.rating}
              </p>

              <p className="price">
                <strong>Precio:</strong> {product.price.toFixed(2)}€
              </p>

              <p>
                <strong>Stock:</strong>{" "}
                {product.stock <= 10
                  ? `Quedan pocas unidades (${product.stock})`
                  : `${product.stock} unidades disponibles`}
              </p>

              <p>
                <strong>Peso:</strong>{" "}
                {product.weight ? `${product.weight} g` : "No disponible"}
              </p>

              <p>
                <strong>Dimensiones:</strong>{" "}
                {product.dimensions
                  ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`
                  : "No disponibles"}
              </p>
            </div>
          </div>
        </SectionContainer>
      </ContainerBackHome>
    </main>
  );
}
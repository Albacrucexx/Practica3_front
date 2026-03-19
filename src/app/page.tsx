"use client";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductGrid from "./components/ProductGrid";
import SectionContainer from "./components/SectionContainer";
import { getProducts } from "./lib/api/product";
import { Product } from "./types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const text = searchQuery.toLowerCase();

    return (
      product.title.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text)
    );
  });

  return (
    <main className="container">
      <SectionContainer>
        <h1 className="mainTitle">Catálogo de Productos</h1>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <p className="resultsText">
          Resultados encontrados: {filteredProducts.length}
        </p>

        <ProductGrid products={filteredProducts} />
      </SectionContainer>
    </main>
  );
}
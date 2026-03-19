import api from "./axios";
import { Product, ProductsResponse } from "../../types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ProductsResponse>("/products");
  return response.data.products;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};
import { api } from "@/libs/axios";
import { Product } from "@/types/Product";

type Response = Product[];

export function listProducts() {
  return api.get<Response>("/products", {
    params: {
      limit: 5,
    },
  });
}

import { useQuery } from "react-query";

import { listProducts } from "@/api/products/list";
import { ProductCard } from "@/components/widgets/ProductCard";

export function HomePage() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["products"],
    queryFn: () => listProducts(),
  });

  return (
    <div>
      <h1 className="mb-4 text-2xl">Products</h1>
      {isLoading && <p>Loading...</p>}
      {isSuccess &&
        data.data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </div>
  );
}

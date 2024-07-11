import { Product } from "@/types/Product";

type Props = Product;

export function ProductCard(props: Props) {
  return (
    <div className="mb-4 bg-white p-4 shadow">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <p className="rounded-full bg-zinc-800 px-4 py-1 text-sm text-zinc-200">
          {props.category}
        </p>
      </header>
      <p className="text-gray-500">{props.description}</p>
      <p className="text-gray-500">Price: {props.price}</p>
      <img src={props.image} className="w-20" />
    </div>
  );
}

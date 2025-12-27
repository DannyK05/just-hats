import type { TTrendingHat } from "../types";

type CardProps = TTrendingHat;

export default function Card({ imgUrl, name, price, brand }: CardProps) {
  return (
    <div className="h-100 flex flex-col px-1 items-center justify-end space-y-5 border-10 border-purple-600 shadow-lg">
      <img className="" src={imgUrl} alt={name} width={200} />
      <div className="w-full flex flex-col items-center space-y-1 border-b-0 border-purple-600 py-2 border-10">
        <h2 className="text-xl">{name}</h2>
        <p className="text-xs">{brand}</p>
        <p className="text-lg font-bold">${price.toLocaleString()}</p>
      </div>
    </div>
  );
}

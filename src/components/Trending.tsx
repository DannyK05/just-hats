import { ArrowRightCircle } from "lucide-react";
import { trendingHats } from "../data";
import Card from "./Card";

export default function Trending() {
  return (
    <section
      id="trending"
      className="w-full flex items-end flex-col border-t-10 border-dashed overflow-hidden space-y-10 min-h-screen px-4 pt-[100px] pb-5"
    >
      <h1 className="text-3xl text-center lg:text-6xl">
        Our <span className="text-purple-600">Trending</span> Products
      </h1>
      <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-4">
        {trendingHats.map(({ imgUrl, name, price, brand }) => (
          <Card name={name} imgUrl={imgUrl} price={price} brand={brand} />
        ))}
      </div>
      <div className="flex cursor-pointer items-center space-x-1 lg:hover:text-purple-600 lg:hover:underline">
        <p className="text-lg font-semibold capitalize lg:text-xl">
          Check out more at our store
        </p>{" "}
        <ArrowRightCircle />
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowRightCircle } from "lucide-react";
import { trendingHats } from "../data";
import Card from "../components/Card";

export default function Trending() {
  return (
    <section
      id="trending"
      className="w-full min-h-screen flex flex-col items-end space-y-10 border-t-10 border-dashed overflow-hidden px-4 pt-[100px] pb-5"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-3xl text-center lg:text-6xl"
      >
        Our <span className="text-purple-600">Trending</span> Products
      </motion.h1>
      <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-4">
        {trendingHats.map(({ imgUrl, name, price, brand }, id) => (
          <Card
            key={id}
            name={name}
            imgUrl={imgUrl}
            price={price}
            brand={brand}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center space-x-1 cursor-pointer lg:hover:text-purple-600 lg:hover:underline"
      >
        <p className="text-lg font-semibold capitalize lg:text-xl">
          Check out more at our store
        </p>{" "}
        <ArrowRightCircle />
      </motion.div>
    </section>
  );
}

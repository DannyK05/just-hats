import { motion } from "motion/react";
import type { TTrendingHat } from "../types";

type CardProps = TTrendingHat;

export default function Card({ imgUrl, name, price, brand }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -8 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="group h-100 flex flex-col px-1 items-center justify-end space-y-5 border-10 border-purple-600 shadow-lg cursor-pointer ease-in-out hover:px-0 active:scale-90"
    >
      <img
        className="group-hover:scale-110"
        src={imgUrl}
        alt={name}
        width={200}
      />
      <div className="w-full flex flex-col items-center space-y-1 border-b-0 border-purple-600 py-2 border-10 group-hover:border-x-0">
        <h2 className="text-xl">{name}</h2>
        <p className="text-xs">{brand}</p>
        <p className="text-lg font-bold">${price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/assets/images/others/hero-bg.webp)",
        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="w-full h-full relative flex items-center justify-center text-white bg-linear-to-b from-black/25 backdrop-blur-40">
        <div className="w-full flex flex-col items-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="w-full flex items-center flex-col space-y-1 text-center"
          >
            <span className="text-center text-3xl lg:text-5xl">
              Hats,
              <br /> Hats,
              <br /> Hats,
            </span>
            <br />
            <span className="text-6xl text-purple-600 lg:text-8xl">
              Just Hats.
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <Button className="w-50 h-30" variant="white">
              Get Hats
            </Button>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }}
          className=" absolute top-33 left-15 rotate-[-30deg] lg:top-16 lg:left-118 lg:block"
          src="/assets/images/hats/bucket-hat2.webp"
          alt="Bucket Hat"
          fetchPriority="high"
          width={100}
          height={100}
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }}
          className="absolute top-69 left-32 lg:top-60 lg:left-76 lg:block"
          src="/assets/images/hats/top-hat.webp"
          alt="Top hat"
          fetchPriority="high"
          width={100}
          height={100}
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }}
          className="absolute bottom-71 right-14 rotate-[-20deg] lg:bottom-55 lg:right-51 lg:block"
          src="/assets/images/hats/snapback-hat2.webp"
          alt="Snapback"
          fetchPriority="high"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { extraCases } from "../data";

export default function More() {
  return (
    <section
      id="more"
      className="w-full min-h-screen flex flex-col items-center space-y-10 px-4 pt-[100px] pb-5 overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-black text-4xl lg:text-6xl"
      >
        We've got{" "}
        <span className="text-purple-600 text-5xl lg:text-7xl">hats</span> for
        every <span className="text-purple-600">look</span> and{" "}
        <span className="text-purple-600">purpose</span>
      </motion.h1>

      <div className="w-full flex flex-col items-center border-t-10 border-dashed mt-10 pt-4 space-y-6">
        <div className="w-full grid grid-cols-1 place-items-start gap-y-6 lg:grid-cols-2">
          <div className="w-full flex items-center flex-col space-y-6 mb-4 px-4 lg:flex-row lg:justify-between lg:col-span-2 lg:space-y-0">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-5xl text-center lg:text-8xl"
            >
              The sky is too <span className="text-yellow-400">sunny ?</span>{" "}
            </motion.h2>

            <motion.img
              initial={{ opacity: 0, x: 20, rotate: 120 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-full mr-4 border-10 border-purple-600"
              src="/assets/images/others/sun-rise.webp"
              alt="Sun Rise"
              width={250}
              height={250}
            />
          </div>

          <div className="flex flex-col items-start space-y-4 px-2">
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bogle text-7xl text-center"
            >
              You can Tryy..
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex items-center flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0"
            >
              <h1 className="text-purple-600 text-3xl text-shadow-lg text-center">
                The Bucket Hat
              </h1>
              <div className="w-80 h-50 relative border-10 border-yellow-400">
                <img
                  className="absolute z-5 left-[-40px] bottom-[-40px]"
                  src="/assets/images/hats/bucket-hat3.webp"
                  alt="Bucket Hat"
                  width={250}
                  height={250}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center px-2 space-x-2"
          >
            <p className="bogle text-xl text-center mt-6 lg:text-3xl">
              It's{" "}
              <span className="text-red-600 text-2xl lg:text-4xl">
                Stylish,
              </span>
              <span className="text-blue-400 text-2xl lg:text-4xl">Sleek</span>{" "}
              and <br />
              it keeps the{" "}
              <span className="text-yellow-400 text-2xl mr-1 lg:text-4xl">
                {" "}
                Rays
              </span>
              away.
            </p>

            <div className="w-50 h-50 relative border-10 border-yellow-400 overflow-hidden lg:w-80 lg:h-70">
              <img
                className="absolute left-0 bottom-[-20px] z-5"
                src="/assets/images/models/bucket-model2.webp"
                alt="Bucket Model"
                width={500}
                height={250}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col items-center space-y-4 px-2 lg:flex-row lg:space-x-8 lg:col-span-2 lg:space-y-0"
          >
            <p className="bogle text-5xl lg:text-6xl">
              Did I mention it's
              <span className="text-purple-600 text-6xl lg:text-7xl">
                {" "}
                Stylish...
              </span>
            </p>

            <div className="w-80 h-80 relative overflow-hidden border-10 border-yellow-400 lg:w-100 lg:h-100">
              <img
                className="absolute left-0 bottom-[-20px] z-5"
                src="/assets/images/models/bucket-model.webp"
                alt="Bucket Model"
                width={500}
                height={250}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center space-y-6 mt-10 pt-4 border-t-10 border-dashed">
        <div className="w-full grid grid-cols-1 place-items-center lg:grid-cols-2 lg:gap-y-10 lg:gap-x-8">
          <div className="w-full flex flex-col items-center space-y-6 px-4 mb-8 lg:col-span-2 lg:space-y-0 lg:justify-between lg:flex-row">
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="bogle text-5xl text-center lg:text-8xl"
            >
              or are the winter <span className="text-cyan-400">chills</span>{" "}
              getting to you ?{" "}
            </motion.p>

            <motion.img
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-full mr-4 border-10 border-purple-600"
              src="/assets/images/others/winter.webp"
              alt="Winter"
              width={250}
              height={250}
            />
          </div>

          <div className="w-full flex flex-col items-center space-y-10 px-2 lg:col-span-2 ">
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bogle text-7xl"
            >
              Here's the good ol'
            </motion.p>
            <div className="flex flex-col items-center space-y-4 space-x-0 lg:flex-row lg:space-x-4 lg:space-y-0">
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bartle text-purple-600 text-3xl text-shadow-lg text-center"
              >
                Beanie
              </motion.p>
              <div className="w-60 h-50 relative border-10 border-cyan-400">
                <img
                  className="absolute z-5 left-[-40px] bottom-[-100px]"
                  src="/assets/images/hats/beanie.webp"
                  alt="Beanie"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="w-full flex items-center justify-between px-2 mt-10"
          >
            <div className="w-50 h-60 relative overflow-hidden border-10 border-cyan-400 lg:w-80 lg:h-70">
              <img
                className="absolute z-5 left-[0px] bottom-[-20px]"
                src="/assets/images/models/beanie-model.webp"
                alt="Beanie Model"
                width={250}
                height={250}
              />
            </div>
            <p className="bogle text-xl text-center mt-6 lg:text-3xl">
              You can never go <span className="text-red-600">wrong</span> with
              it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="w-full flex items-center space-x-6 px-2 mt-10 ml-10"
          >
            <div className="w-50 h-60 relative border-10 border-cyan-400 lg:w-80 lg:h-70">
              <img
                className="absolute z-5 left-[-30px] bottom-[-20px]"
                src="/assets/images/hats/hemp-beanie.webp"
                alt="Hemp Beanie"
                width={250}
                height={250}
              />
            </div>
            <p className="bogle text-xl text-center mt-6 lg:text-3xl">
              Really <span className="text-purple-600">Warm</span> <br /> and
              <span className="text-green-600"> Cozy</span>
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center space-y-6 mt-10 pt-4 border-t-10 border-dashed">
        <div className="w-full grid grid-cols-2 gap-4 place-items-center lg:grid-cols-3 lg:gap-y-10 lg:gap-x-8">
          <div className="w-full flex items-center flex-col space-y-6 col-span-2 mb-8 lg:space-y-0 lg:col-span-3 px-4 lg:justify-between lg:flex-row">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-5xl text-center lg:text-8xl"
            >
              Is there anything <span className="text-red-500">else ?</span>{" "}
              <br />
              <span className="text-purple-600">We got you.</span>
            </motion.h2>

            <motion.img
              initial={{ rotate: 30 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-full mr-4 border-10 border-purple-600"
              src="/assets/images/hats/cowboy-hat.webp"
              alt="Cowboy"
              width={250}
              height={250}
            />
          </div>

          {extraCases.map(({ name, url, borderColor, hatType }, index) => (
            <motion.div
              initial={{ opacity: 0, rotate: -8 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              key={index}
              className="w-full flex items-center px-2"
            >
              <div
                className={`relative w-40 h-50 overflow-hidden border-10 ${borderColor} lg:w-80 lg:h-70 `}
              >
                <img
                  className="absolute z-5 bottom-0 lg:bottom-[-80px]"
                  src={url}
                  alt={name}
                  width={350}
                  height={250}
                />
                <div
                  className={`h-7 w-25 border-b-6 border-r-6 font-bold text-center ${borderColor}`}
                >
                  <p className="text-sm">{hatType}s</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="bogle text-black text-center text-4xl lg:text-6xl"
      >
        These aren't
        <br />
        <span className="text-purple-600 text-5xl lg:text-7xl">
          just hats
        </span>{" "}
        <br />
        these are
        <span className="text-purple-600"> hats</span> for{" "}
        <span className="text-purple-600 text-5xl lg:text-7xl">you</span>
      </motion.p>
    </section>
  );
}

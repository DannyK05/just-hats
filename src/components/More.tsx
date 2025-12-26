import { extraCases } from "../data/data";

export default function More() {
  return (
    <section
      id="more"
      className="w-full flex items-start flex-col overflow-hidden space-y-10 min-h-screen px-4 pt-[100px]"
    >
      <h1 className="text-black text:4xl lg:text-6xl">
        We've got{" "}
        <span className="text-purple-600 text-5xl lg:text-7xl">hats</span> for
        every <span className="text-purple-600">look</span> and{" "}
        <span className="text-purple-600">purpose</span>
      </h1>

      <div className="w-full flex flex-col items-center mt-10 border-t-10 border-dashed pt-4 space-y-6">
        <div className="w-full grid grid-cols-2 gap-y-6 place-items-start">
          <div className="w-full flex items-center px-4 justify-between col-span-2 mb-4 ">
            <h2 className="text-2xl lg:text-8xl">
              The sky is too <span className="text-yellow-400">sunny ?</span>{" "}
            </h2>

            <img
              className="rounded-full mr-4 border-10 border-purple-600"
              src="/assets/images/sun-rise.jpg"
              alt="Sun Rise"
              width={250}
              height={250}
            />
          </div>

          <div className="flex flex-col items-start px-2 space-y-4">
            <h2 className="text-7xl">You can Tryy..</h2>
            <div className="flex items-center space-x-4">
              <h1 className="text-purple-600 text-3xl text-shadow-lg text-center">
                The Bucket Hat
              </h1>
              <div className="relative border w-80 h-50 border-10 border-yellow-400">
                <img
                  className="absolute left-[-40px] bottom-[-40px] z-5"
                  src="/assets/images/bucket-hat3.png"
                  alt="Bucket Hat"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>

          <div className="flex items-start px-2 space-x-2">
            <h2 className="text-3xl text-center mt-6">
              It's <span className="text-red-600 text-4xl">Stylish,</span>
              <span className="text-blue-400 text-4xl">Sleek</span> and <br />
              it keeps the{" "}
              <span className="text-yellow-400 text-4xl"> Rays</span>
              away.
            </h2>

            <div className="relative overflow-hidden border w-80 h-70 border-10 border-yellow-400">
              <img
                className="absolute left-[-20px] bottom-[-20px] z-5"
                src="/assets/images/bucket-model2.png"
                alt="Bucket Model"
                width={250}
                height={250}
              />
            </div>
          </div>

          <div className="flex items-center px-2 space-x-8 col-span-2">
            <h2 className="text-6xl">
              Did I mention it's
              <span className="text-purple-600 text-7xl"> Stylish...</span>
            </h2>

            <div className="relative overflow-y-hidden border w-100 h-100 border-10 border-yellow-400">
              <img
                className="absolute left-[-20px] bottom-[-20px] z-5"
                src="/assets/images/bucket-model.png"
                alt="Bucket Model"
                width={450}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-10 border-t-10 border-dashed pt-4 space-y-6">
        <div className="w-full grid grid-cols-2 gap-y-10 gap-x-8 place-items-center">
          <div className="w-full flex items-center col-span-2 px-4 justify-between mb-4 ">
            <h2 className="text-2xl lg:text-8xl">
              or are the winter <span className="text-cyan-400">chills</span>{" "}
              getting to you ?{" "}
            </h2>

            <img
              className="rounded-full mr-4 border-10 border-purple-600"
              src="/assets/images/winter.jpg"
              alt="Winter"
              width={250}
              height={250}
            />
          </div>

          <div className="w-full flex flex-col col-span-2 items-center px-2 space-y-10">
            <h2 className="text-7xl">Here's the good ol'</h2>
            <div className="flex items-center space-x-4">
              <h1 className="text-purple-600 text-3xl text-shadow-lg text-center">
                Beanie
              </h1>
              <div className="relative border w-60 h-50 border-10 border-cyan-400">
                <img
                  className="absolute left-[-40px] bottom-[-100px] z-5"
                  src="/assets/images/beanie.png"
                  alt="Beanie"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex items-center px-2 mt-10 justify-between">
            <div className="relative border w-80 h-70 border-10 border-cyan-400">
              <img
                className="absolute left-[0px] bottom-[-20px] z-5"
                src="/assets/images/beanie-model.png"
                alt="Bucket Model"
                width={250}
                height={250}
              />
            </div>
            <h2 className="text-3xl text-center mt-6">
              You can never go wrong with it.
            </h2>
          </div>

          <div className="w-full flex items-center px-2 mt-10 ml-10 space-x-6">
            <div className="relative border w-80 h-70 border-10 border-cyan-400">
              <img
                className="absolute left-[-30px] bottom-[-20px] z-5"
                src="/assets/images/hemp-beanie.png"
                alt="Hemp Beanie"
                width={250}
                height={250}
              />
            </div>
            <h2 className="text-3xl text-center mt-6">
              Warm <br /> and Cozy
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-10 border-t-10 border-dashed pt-4 space-y-6">
        <div className="w-full grid grid-cols-3 gap-y-10 gap-x-8 place-items-center">
          <div className="w-full flex items-center col-span-3 px-4 justify-between mb-4 ">
            <h2 className="text-2xl text-center lg:text-8xl">
              Is there anything <span className="text-red-500">else ?</span>{" "}
              <br />
              <span className="text-purple-600">We got you.</span>
            </h2>

            <img
              className="rounded-full mr-4 border-10 border-purple-600"
              src="/assets/images/cowboy-hat.webp"
              alt="Cowboy"
              width={250}
              height={250}
            />
          </div>

          {extraCases.map(({ name, url, borderColor }, index) => (
            <div key={index} className="w-full flex items-center px-2">
              <div
                className={`relative border w-80 h-70 border-10 ${borderColor}`}
              >
                <img
                  className="absolute left-[-30px] bottom-[-20px] z-5"
                  src={url}
                  alt={name}
                  width={250}
                  height={250}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-black text:4xl lg:text-6xl">
        These aren't
        <span className="text-purple-600 text-5xl lg:text-7xl">
          just hats
        </span>{" "}
        they are the
        <span className="text-purple-600">hats</span> for{" "}
        <span className="text-purple-600">you</span>
      </h1>
    </section>
  );
}

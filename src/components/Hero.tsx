import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/assets/images/hero-bg.jpg)",
        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="w-full h-full relative text-white bg-linear-to-b from-black/25 backdrop-blur-40 flex items-center justify-center">
        <div className="w-full flex flex-col items-center space-y-8">
          <h1 className="flex items-center flex-col space-y-1 w-full text-center">
            <span className="text-center text-3xl lg:text-5xl">
              Hats,
              <br /> Hats,
              <br /> Hats,
            </span>
            <br />
            <span className="text-6xl text-purple-600 lg:text-8xl">
              Just Hats.
            </span>
          </h1>

          <Button className="w-50 h-30" variant="white">
            Get Hats
          </Button>
        </div>
        <img
          className=" absolute top-33 left-15 rotate-[-30deg] lg:top-16 lg:left-118 lg:block"
          src="/assets/images/bucket-hat2.png"
          alt="Bucket Hat"
          width={100}
          height={100}
        />

        <img
          className="absolute top-69 left-32 lg:top-60 lg:left-76 lg:block"
          src="/assets/images/top-hat.png"
          alt="Top hat"
          width={100}
          height={100}
        />

        <img
          className=" absolute bottom-71 right-14 rotate-[-20deg] lg:bottom-55 lg:right-51 lg:block"
          src="/assets/images/snapback-hat2.png"
          alt="Snapback"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}

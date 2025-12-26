export default function Hero() {
  return (
    <section
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
      <div className="w-full h-full relative text-white bg-linear-to-b to-black/30 backdrop-blur-40 flex items-center justify-center">
        <h1 className="flex items-center flex-col space-y-3 w-full text-center">
          <span className="text-center text-3xl lg:text-5xl">
            Hats,
            <br /> Hats,
            <br /> Hats,
          </span>
          <br />
          <span className="text-6xl lg:text-8xl">Just Hats</span>
        </h1>
        <img
          className="hidden absolute top-12 left-115 rotate-[-30deg] lg:block"
          src="/assets/images/beanie.png"
          alt="Beanie"
          width={100}
          height={100}
        />
        <img
          className="hidden absolute bottom-45 right-48 rotate-[-20deg] lg:block"
          src="/assets/images/snapback-hat2.png"
          alt="Snapback"
          width={100}
          height={100}
        />
        <img
          className="hidden absolute top-65 lg:block"
          src="/assets/images/bucket-hat2.png"
          alt="Bucket Hat"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}

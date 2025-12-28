import { MailIcon, MapPin, PhoneIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full flex items-center flex-col overflow-hidden border-t-10 border-dashed space-y-10 px-4 pt-[100px]"
    >
      <div className="w-full flex flex-col items-center space-y-2">
        <h1 className="w-full text-purple-600 text-6xl text-center">
          Just Hats
        </h1>
        <p className="text-2xl font-semibold">The hats for you</p>

        <div className="flex items-center flex-col space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0">
          <div className="flex items-center space-x-1">
            <MapPin className="text-purple-600" />
            <p className="text-sm font-semibold">
              123, Nowhere town, Some State, World
            </p>
          </div>

          <div className="flex items-center space-x-1">
            <MailIcon className="text-purple-600" />
            <p className="text-sm font-semibold">justhats@kmail.com</p>
          </div>

          <div className="flex items-center space-x-1">
            <PhoneIcon className="text-purple-600" />
            <p className="text-sm font-semibold">
              +234 123 456 78, +234 876 543 21
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-2 lg:w-4/5">
        <p>
          This is a fictional store, it doesn't actually exist and I own no
          rights to the images used, these were gotten online from brands like{" "}
          <a
            className="mr-1 font-semibold hover:underline"
            href="https://www.lockhatters.com"
            rel="noopener"
          >
            Lockhatters,
          </a>
          <a
            className="mr-1 font-semibold hover:underline"
            href="https://www.gigipip.com/products/custom-trucker-hat-experience"
            rel="noopener"
          >
            Gigi Pip,
          </a>
          <a
            className="mr-1 font-semibold hover:underline"
            href="https://saltandstraw.com/products/ampersand-beanie"
            rel="noopener"
          >
            Salt & Straw,
          </a>
          <a
            className="mr-1 font-semibold hover:underline"
            href="https://bobbs.uk/"
            rel="noopener"
          >
            Bobbs.
          </a>
        </p>
        <p className="w-full lg:text-center">
          Check them out if you are interested in the hats.
        </p>
      </div>

      <p className="w-full text-center border-t py-2">
        Made with 💖 by{" "}
        <a
          className="hover:text-purple-600 hover:font-bold hover:underline"
          rel="noopener"
          href="https://github.com/DannyK05"
        >
          Kxlade
        </a>
      </p>
    </footer>
  );
}

import { LocateIcon, MailIcon, MapPin, PhoneIcon } from "lucide-react";

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
            <p className="text-sm font-semibold">justhats@gmail.com</p>
          </div>

          <div className="flex items-center space-x-1">
            <PhoneIcon className="text-purple-600" />
            <p className="text-sm font-semibold">
              +234 123 456 78, +234 876 543 21
            </p>
          </div>
        </div>
      </div>

      <div>
        <p>
          This is a fictional store and doesn't actually exist and I own no
          rights to the images used, these were gotten online from brands like
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

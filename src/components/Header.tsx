import { useEffect, useState } from "react";
import { ListIcon, XIcon } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { title: "home", hash: "#home" },
  { title: "more", hash: "#more" },
  { title: "trending", hash: "#trending" },
  { title: "sales", hash: "#sales" },
];

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleNav = () => setShowNav((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${
        scrollY > 100 && "bg-white"
      } w-full px-2 py-3 flex fixed z-10 items-center justify-between`}
    >
      <h1 className="text-purple-600">Just Hats</h1>
      <span onClick={handleNav} className="lg:hidden">
        <ListIcon />
      </span>
      <nav
        className={`${
          !showNav && "hidden"
        } z-10 fixed w-1/2 h-full flex capitalize items-center flex-col pt-10 space-y-10 right-0 top-0 bg-white lg:w-auto lg:bg-inherit lg:static lg:pt-0 lg:flex lg:flex-row lg:space-x-10 lg:space-y-0`}
      >
        <div className="flex items-center flex-col text-sm space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <span onClick={handleNav} className="lg:hidden">
            <XIcon />
          </span>

          {navLinks.map(({ title, hash }, index) => (
            <a
              className={`${
                scrollY < 101 ? "lg:text-white" : "lg:text-black"
              } text-semibold lg:hover:underline lg:hover:text-purple-600 active:underline`}
              key={index}
              href={hash}
            >
              {title}
            </a>
          ))}
        </div>
        <Button
          className="hidden lg:block"
          variant={scrollY < 101 ? "white" : "black"}
        >
          Get Hats
        </Button>

        <Button className="lg:hidden">Get Hats</Button>
      </nav>
    </header>
  );
}

import { useEffect, useState } from "react";

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
        =
      </span>
      <nav
        className={`${
          !showNav && "hidden"
        } z-10 fixed w-1/2 h-full capitalize items-center flex-col space-y-4 right-0 top-0 bg-white lg:w-auto lg:bg-inherit lg:static lg:flex lg:flex-row lg:space-x-4 lg:space-y-0`}
      >
        <div className="flex items-center flex-col text-sm space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <span onClick={handleNav} className="lg:hidden">
            x
          </span>

          {navLinks.map(({ title, hash }, index) => (
            <a
              className="lg:hover:underline active:underline"
              key={index}
              href={hash}
            >
              {title}
            </a>
          ))}
        </div>
        <button>Get Hats</button>
      </nav>
    </header>
  );
}

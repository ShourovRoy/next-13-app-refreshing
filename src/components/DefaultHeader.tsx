import Link from "next/link";
import Navlink from "./Navlink";

const DefaultHeader = () => {
  return (
    <div>
      <header className="py-4 bg-white drop-shadow">
        <div className="container flex justify-between space-x-2 items-center">
          {/* left side */}
          <Link href="/">
            <img src="/svgs/logo.svg" alt="Discover Nuxt 3" />
          </Link>
          {/* right side */}
          <ul className="flex space-x-4">
            <Navlink slug="/">Home</Navlink>
            <Navlink slug="/about">About</Navlink>
            <Navlink slug="/products">Products</Navlink>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default DefaultHeader;

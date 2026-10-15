import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import searchIcon from "../assets/search-icon.svg";

function Navbar() {
  return (
    <div className=" flex max-w-full items-center justify-between w-full px-4 py-3 md:px-7">
      {/* Logo + Mobile Menu */}
      <div className="flex items-center gap-2  shrink-0 max-[359px]:text-lg ">
        <button className="block md:hidden text-4xl max-[359px]:text-lg">
          ☰
        </button>

        <h1 className="text-4xl md:text-2xl font-extrabold max-[359px]:text-lg">
          <Link to={"/"}>SHOP.CO</Link>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 ml-8">
        <select className="text-sm bg-transparent outline-none">
          <option>Shop</option>
        </select>

        <Link className="text-sm whitespace-nowrap">On-Sale</Link>

        <Link className="text-sm whitespace-nowrap">New Arrivals</Link>

        <Link className="text-sm whitespace-nowrap">Brands</Link>

        <input
          type="text"
          placeholder="⌕ Search for products..."
          className="
            bg-[#F2F2F2]
            h-10
            lg:h-12
            rounded-full
            px-4
            outline-none
            flex-1
            min-w-0
            ml-2
          "
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-1 md:gap-2 ml-3 shrink-0 ">
        {/* Search - Mobile Only */}
        <button className="block md:hidden w-8 h-8 flex items-center justify-center">
          <img
            src={searchIcon}
            className="max-[359px]:w-5 max-[359px]:h-5  w-6 h-6"
            alt="Search"
          />
        </button>

        {/* Cart */}
        <Link
          className="w-10 h-10 flex items-center justify-center"
          to={"cart/"}
        >
          <img
            src={cartIcon}
            className="max-[359px]:w-5 max-[359px]:h-5  w-6 h-6 md:w-7 md:h-7"
            alt="Cart"
          />
        </Link>

        {/* Profile */}
        <Link className="w-10 h-10 flex items-center justify-center">
          <img
            src={profileIcon}
            className="max-[359px]:w-5 max-[359px]:h-5 w-6 h-6  md:w-7 md:h-7"
            alt="Profile"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

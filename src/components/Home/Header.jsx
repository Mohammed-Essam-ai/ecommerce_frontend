import header_img from "../../assets/header_img.png";
function Header() {
  return (
    <div className="bg-[#f1f1f1]   mt-0 gap-15 flex  max-w-full flex-col md:flex-row pt-10 items-center">
      <div className="flex flex-col gap-3 ml-10">
        <h2 className="font-extrabold text-5xl ">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        <p className=" text-sm  max-w-full">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-[#000000] text-[#FFFFFF] rounded-3xl flex-wrap w-60 m-3 p-2  max-w-full">
          Shop Now
        </button>
        <div className="flex flex-row flex-wrap justify-between">
          <div>
            <h2 className="font-extrabold text-3xl">200+</h2>
            <p>International Brands</p>
          </div>
          <div>
            <h2 className="font-extrabold text-3xl">2,000+</h2>
            <p>High-Quality Products </p>
          </div>
          <div>
            <h2 className="font-extrabold text-3xl">30,000</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div>
        <img src={header_img} className="relative  w-full"></img>
      </div>
    </div>
  );
}

export default Header;

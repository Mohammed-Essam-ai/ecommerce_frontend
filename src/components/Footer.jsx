import { Link } from "react-router-dom";
import facebookIcon from "../assets/facebook.jpg";
import gitHubIcon from "../assets/github.jpg";
import instgramIcon from "../assets/instgram.jpg";
import xIcon from "../assets/x.jpg";

function Footer() {
  return (
    <footer className="m-0   mt-1">
      <center>
        <div className="relative top-40 mb-0 rounded-2xl bg-black w-[90%] md:w-[80%] md:h-[180px] md:top-25 flex items-center md:gap-1 flex-col md:flex-row justify-around p-4">
          <p className="text-[#f0f0f0] font-extrabold md:w-[50%] text-3xl m-0">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="flex flex-col gap-3 m-0 w-[90%] md:w-[50%] items-center m-4 justify-center">
            <input
              type="text"
              className="bg-[#FFFFFF] rounded-lg p-2  w-full h-[42px] md:w-full md:h-[48px]"
              placeholder="✉️ Enter your email address"
            />
            <button className="bg-[#FFFFFF] rounded-lg w-full h-[42px] md:w-full md:h-[48px]">
              Subscribe to NewsLetter{" "}
            </button>
          </div>
        </div>
      </center>

      <div className="  bg-[#f0f0f0] mt-0 w-full">
        <div className="pt-40 pl-10 p-6 flex flex-wrap gap-10 md:gap-20 ">
          <div>
            <p className="font-extrabold text-3xl pt-10 md:p-0 ">SHOP.CO</p>
            <p className="md:w-[248px] text-sm text-[#9A9A9A] pt-2">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-1 m-2">
              <Link>
                <img src={xIcon} alt="" className="w-8 h-8 rounded-4xl" />
              </Link>
              <Link>
                <img
                  src={facebookIcon}
                  alt=""
                  className="w-8 h-8 rounded-4xl"
                />
              </Link>
              <Link>
                <img
                  src={instgramIcon}
                  alt=""
                  className="w-8 h-8 rounded-4xl"
                />
              </Link>
              <Link>
                <img src={gitHubIcon} alt="" className="w-8 h-8 rounded-4xl" />
              </Link>
            </div>
          </div>
          <div>
            <p className="tracking-widest">COMPANY</p>
            <div className="flex flex-col gap-2 pt-2">
              <Link className="text-sm text-[#9A9A9A]">About</Link>
              <Link className="text-sm text-[#9A9A9A]">Features</Link>
              <Link className="text-sm text-[#9A9A9A]">Works</Link>
              <Link className="text-sm text-[#9A9A9A]">Career</Link>
            </div>
          </div>
          <div>
            <p className="tracking-widest">HELP</p>
            <div className="flex flex-col gap-2 pt-2">
              <Link className="text-sm text-[#9A9A9A]">Customer Support</Link>
              <Link className="text-sm text-[#9A9A9A]">Delivery Details</Link>
              <Link className="text-sm text-[#9A9A9A]">
                Terms & Condittions
              </Link>
              <Link className="text-sm text-[#9A9A9A]">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <p className="tracking-widest">FAQ</p>
            <div className="flex flex-col gap-2 pt-2">
              <Link className="text-sm text-[#9A9A9A]">Acount</Link>
              <Link className="text-sm text-[#9A9A9A]">Manage Deliveries</Link>
              <Link className="text-sm text-[#9A9A9A]">Orders</Link>
              <Link className="text-sm text-[#9A9A9A]">Payments</Link>
            </div>
          </div>
          <div>
            <p className="tracking-widest">RESOURCES</p>
            <div className="flex flex-col gap-2 pt-2">
              <Link className="text-sm text-[#9A9A9A]">Free eBook</Link>
              <Link className="text-sm text-[#9A9A9A]">
                Development Tutorial
              </Link>
              <Link className="text-sm text-[#9A9A9A]">How to-blog</Link>
              <Link className="text-sm text-[#9A9A9A]">Youtube Playlist</Link>
            </div>
          </div>
        </div>
        <center>
          <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center md:mt-5" />
        </center>
        <p className="text-sm text-[#9A9A9A] m-5">
          Shop.co 2000-2026, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

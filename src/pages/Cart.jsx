import CartItems from "../components/Cart/CartItems";
import Footer from "../components/Footer";
import OrderSummary from "../components/Cart/OrderSummary";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

function Cart() {
  return (
    <div>
      <Announcement />
      <Navbar />

      <center>
        <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center" />
      </center>
      <br />
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[60%]">
          <CartItems />
        </div>

        <div className="md:w-[40%]">
          <OrderSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

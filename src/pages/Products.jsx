import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Filters from "../components/Products/Filters";
import InnerProducts from "../components/Products/InnerProducts";
import Footer from "../components/Footer";
function Products() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <br />
      <div className="flex gap-5">
        <Filters />
        <InnerProducts />
      </div>
      <Footer />
    </div>
  );
}

export default Products;

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BrandSelection,
  HappyReviews,
  DressStyleSection,
  Header,
  NewProducts,
  TopProducts,
} from "../components/Home";
function Home() {
  return (
    <div className="">
      <Announcement />
      <Navbar />
      <br />
      <Header />
      <BrandSelection />
      <NewProducts />
      <br></br>
      <center>
        <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center" />
      </center>
      <TopProducts />
      <DressStyleSection />
      <HappyReviews />
      <Footer />
    </div>
  );
}

export default Home;

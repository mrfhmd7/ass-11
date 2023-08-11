import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FeedBack from "../FeedBack/FeedBack";
import Gallery from "../Gallery/Gallery";
import OpenTime from "../OpenTime/OpenTime";
import ShopByCategory from "../Shop/ShopByCategory";
import ContactUs from "./Contact/ContactUs";
import titles from "../../../title";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{titles.home}</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <OpenTime></OpenTime>
      <FeedBack></FeedBack>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;

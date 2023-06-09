import { Helmet } from "react-helmet-async";
import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import Category from "./Category/Category";

const Home = () => (
    <div>
        <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
       <Banner></Banner>
       <Category></Category>
       <PopularMenu></PopularMenu>
       <Featured></Featured>
       <Testimonial></Testimonial>
    </div>
);

export default Home;
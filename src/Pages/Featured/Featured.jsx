import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import featuredImg from "../../assets/Image/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <div className="featured-item bg-fixed bg-slate-500 bg-opacity-40 text-white pt-8 my-20">
            <SectionTitle
            subHeading="Check it Out"
            heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-28 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button style={{transition:'0.8s'}} className="btn-style btn btn-outline border-0 border-b-4 mt-16">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
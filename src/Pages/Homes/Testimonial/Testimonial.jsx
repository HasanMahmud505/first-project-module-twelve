import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading="---What Our Clients Say---"
                heading="TESTIMONIALS"
            ></SectionTitle>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center my-16 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-12">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;
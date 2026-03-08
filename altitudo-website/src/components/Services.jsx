import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const services = [
  {
    title: "Web Development",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    desc: "React Next.js Tailwind"
  },
  {
    title: "Cloud Solutions",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    desc: "AWS Vercel Firebase"
  },
  {
    title: "Software Development",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    desc: "Full stack apps"
  },
  {
    title: "Startup Development",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    desc: "MVP and SaaS products"
  }
];

function Services() {

  return (

   <section id="services" className="py-24 bg-[#F8FAFC]">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-xl font-semibold text-[#0F172A] mb-16">
          Our Services
        </h2>

      <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  loop={true}
  speed={6000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false
  }}
  breakpoints={{
    0: {
      slidesPerView: 1
    },
    426: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }}
>

          {services.map((service, index) => (

            <SwiperSlide key={index}>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">

                <img
                  src={service.img}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600">
                    {service.desc}
                  </p>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );

}

export default Services;
import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <>
     <div className="relative w-full h-[70vh] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="https://videos.pexels.com/video-files/5155396/5155396-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="relative p-5 md:w-[55%] xl:w-[40%] z-10 text-white font-serif text-start mx-4 py-80">
            <h1 className="text-lg md:text-xl xl:text-4xl font-bold">About US</h1>
            <p className="text-xs ">
            By embracing necessary elements like value, quality, durability, and
          performance, we want to develop products that not only satisfy client
          needs but also foster an emotional bond.
            </p>
            <p className="text-xs  ">
          Kayhan Audio is a firm that manufactures and develops automotive
          entertainment devices. With 27 years of experience in manufacturing
          and developing automotive entertainment devices, we understand our
          customers’ needs and provide the best services possible.
        </p>
          </div>
        </div>
      <section className="w-[80%] p-3  mx-auto my-5">
        <p className="text-xs">
         
        </p>
        <p className="text-xs ">
          Kayhan Audio is a firm that manufactures and develops automotive
          entertainment devices. With 27 years of experience in manufacturing
          and developing automotive entertainment devices, we understand our
          customers’ needs and provide the best services possible.
        </p>
        <div className="w-full flex flex-wrap justify-evenly">
          <div className=" w-[17rem] xl:w-1/4 p-3 my-3 shadow-md text-center">
            <h4 className="font-semibold text-sm my-2">Our History</h4>
            <p className="text-xs">
              Kayhan Audio was founded in 1997 in Germany, and we later
              established our headquarters and primary production in Australia
              after identifying the market’s growing potential. Our stronger
              market penetration has allowed us to understand the demands of
              domestic automobile owners better and provide various
              customer-friendly improvements.
            </p>
            <p className="my-3 text-xs">
              Kayhan has earned the loyalty of hundreds of thousands of clients
              over more than 20 years in business. Legally, we received a
              business registration certificate from ASCI (Australian Securities
              and Investments Commission) in 2017 as a car parts supplier.
              Additionally, Kayhan was trademarked by the Australian state in
              March 2019.
            </p>
          </div>
          <div className="w-[17rem] xl:w-1/4 p-3 my-3 shadow-md text-center">
            <h4 className="font-semibold text-sm  my-2">
              Introduction Kayhan Audio
            </h4>
            <Image src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/logo.png" alt="this is image" width={200} height={100} className="mx-auto" />
            <p className="text-xs">
              At present, Kayhan Audio is one of the best automobile device
              suppliers in Australia. Our professional staff, who possess deep
              knowledge of the automotive industry, take pride in supplying the
              best-in-class products that are designed to enhance your driving
              experience.
            </p>
          </div>

          <div className=" w-[17rem] xl:w-1/4 p-3 my-3 shadow-md text-center">
            <h4 className="font-semibold text-sm my-2">Our Goal</h4>
            <p className="text-xs">
              Kayhan Audio’s main goal is to provide innovative and reliable
              entertainment solutions for car enthusiasts. To achieve this, we
              have expanded our product range to include a wide array of
              cutting-edge devices that cater to the ever-changing needs of the
              automotive industry. We are continually pursuing the research and
              development of new product lines to expand our operating market
              and serve more clients.
            </p>
            <p className="text-xs">
              So with more than 20 years of operations, what do we supply to
              customers? Let’s find out this in the next part of this article.
            </p>
          </div>
        </div>
        <div className=" w-[95%]  shadow-md my-4 flex flex-col md:flex-row justify-aroun p-5">
          <Image
            className="hidden xl:block xl:w-1/3 h-[18rem] shadow-md shadow-black rounded-md "
            src="https://kayhanaudio.com.au/wp-content/uploads/2024/05/about-us-kayhan-audio-what-do-we-supply.jpg"
            alt="Kayhan Audio introduction"
            width={800}
            height={350}
          />
          <div className="px-3">
            <h1 className="text-xl font-bold">What do we supply?</h1>
            <h3 className="font-semibold text-sm">
              Discover what items we supply to customers.
            </h3>
            <h3 className="font-semibold text-xs">
              Our product line includes:
            </h3>
            <li className="text-xs">Head Unit</li>
            <li className="text-xs">Steering Wheels</li>
            <li className="text-xs">Accessories</li>
            <li className="text-xs">Car Batteries</li>
            <li className="text-xs">Audio Equipment</li>
            <li className="text-xs">Frames and Fascias</li>
            <li className="text-xs">Carplay Interfaces</li>
            <li className="text-xs">Wiring Harnesses</li>
            <p className="text-xs py-2">
              All of our items are created in our facility. We are proud to
              create pieces of equipment and accessories that meet the needs of
              every consumer. Using premium materials and cutting-edge
              technology, Kayhan Audio products ensure peak performance and
              longevity.
            </p>
            <p className="text-xs">
              We use Google Analytics to collect and process data, including
              when you use third-party websites or apps. To find out more, see
              How Google uses data when you use our partner sites or apps.
            </p>
            <p className="text-xs">
              Let’s move on to the next part of the article to learn how we use
              your information.
            </p>
          </div>
        </div>


          <h1 className="text-2xl text-center">Why choose us?</h1>
        <section className="my-2 p-3 flex flex-wrap justify-evenly">
          <div className=" w-[17rem] xl:w-1/4 p-3 my-3 shadow-md text-center">
            <h4 className="font-semibold text-sm my-2">Good customer service</h4>
            <p className="text-xs">
            In addition to our top-notch products, we are also committed to providing excellent customer service. Our customer care representatives have received professional training and are equipped with the necessary knowledge of automobiles. We are always available to assist you with any queries or concerns you may have. Working from Monday to Saturday, you can contact us via Live Chat, email, and phone numbers.
            </p>
            
          </div>
          <div className="w-[17rem] xl:w-1/4 p-3 my-3 shadow-md text-center">
            <h4 className="font-semibold text-sm  my-2">
            Numerous choices for your car
            </h4>
            <p className="text-xs">
            We offer a wide range of products that are compatible with various car models. Whether you’re looking for a new audio system for your Ford Colorado 2015 or a head unit for your Chevrolet, we’ve got you covered.
            </p>
          </div>

          <div className=" w-[17rem] xl:w-1/4 p-3 my-3 shadow-md text-center">
            <h4 className="font-semibold text-sm my-2">Reasonable prices</h4>
            <p className="text-xs">
            At Kayhan Audio, we prioritize customer satisfaction by offering high-quality audio equipment at reasonable prices. If you think something is overpriced, compare our products with our competitors to see the value for yourself.
            </p>
            <p className="text-xs">
              So with more than 20 years of operations, what do we supply to
              customers? Let’s find out this in the next part of this article.
            </p>
          </div>

          <div className=" w-[95%]  shadow-md my-4 flex flex-col md:flex-row justify-aroun p-5">
         
          <div className="px-3">
            <h1 className="text-xl font-bold">Kayhan Audio Store location</h1>
           
            <p className="text-xs py-2">
            We have a workshop located in Unit 3, 151 Dohertys Rd, Laverton North 3026, VIC. You can drop over to see our products on our working day, from 9:00 AM to 6:00 PM. Our friendly and knowledgeable staff will be more than happy to assist you in selecting the perfect product for your car.
            </p>
            <p className="text-xs">
            You can also discover our products and services at our website Kayhanaudio. Providing complete information about products and services with images, you can search for products that suit your needs. The website also has a team of advisors available from 9 a.m. to 6 p.m., Monday through Sunday. Anyone with questions can contact us for help.
            </p>
            <p className="text-xs">
            In summary, Kayhan Audio is a one-stop destination for all your automotive entertainment needs. With our top-quality products, excellent customer service, and extensive range of choices, we are the best choice for you to improve your driving experience.
            </p>
          </div>
          <Image
            className="hidden xl:block xl:w-1/3 h-[14rem] shadow-md shadow-black rounded-md "
            src="https://kayhanaudio.com.au/wp-content/uploads/2024/05/about-us-kayhan-audio-location-store.jpg"
            alt="Kayhan Audio introduction"
            width={800}
            height={350}
          />
        </div>
        </section>
      </section>
    </>
  );
};

export default About;

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { ImageSlideshow } from "../helper/helper";
import Link from "next/link";

export default function Main() {
  const images = [
    "/images/gimage1.jpg",
    "/images/home_display1.jpeg",
    "/images/gimage5.png",
  ];
  const gocab_images = [
    "/images/gimage1.jpg",
    "/images/gimage3.png",
    "/images/home_display2.jpeg",
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex mt-20 pt-10 md:flex-row md:justify-center items-center flex-col md:border-b border-gray-400 mb-10">
        <div className="md:w-1/2 mx-3">
          <h1 className="mb-5 sm:text-4xl text-4xl sm:text-4xl text-blue-900 Avenir xl:w-2/2">
            Efficient Transport and Logistics
          </h1>
          <p className="mb-4 text-lg text-gray-600 ">
            Gocab Efficient Transport and Logistics is your trusted partner for
            seamless, reliable shipping solutions. We&apos;re committed to
            ensuring your cargo reaches its destination efficiently and on time.
          </p>

          <div className="flex sm:flex-row flex-col items-center  md:block hidden">
            <a
              className="inline-flex mt-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-gray-900"
              href="https://play.google.com/store/apps/details?id=com.logistics.gocab"
            >
              {/* <span className="justify-center">Find out more</span> */}
              <Image
                src="/images/play_store.png"
                className="border rounded-lg"
                width={200}
                height={100}
              />
            </a>

            <a
              className="inline-flex px-1 py-1 mt-2  font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-gray-900"
              href="#"
            >
              {/* <span className="justify-center">Apple Store</span> */}
              <Image
                src="/images/app_store.png"
                width={200}
                height={100}
                className="border rounded-lg"
              />
            </a>
          </div>
        </div>
        <ImageSlideshow images={images} style="md:w-1/2" sub_image_class="" />
        <div className="flex sm:flex-row flex-col items-center md:hidden block">
          <a
            className="inline-flex mt-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-gray-900"
            href="https://play.google.com/store/apps/details?id=com.logistics.gocab"
          >
            {/* <span className="justify-center">Find out more</span> */}
            <Image
              src="/images/play_store.png"
              className="border rounded-lg"
              width={200}
              height={100}
            />
          </a>

          <a
            className="inline-flex px-1 py-1 mt-2  font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-gray-900"
            href="#"
          >
            {/* <span className="justify-center">Apple Store</span> */}
            <Image
              src="/images/app_store.png"
              width={200}
              height={100}
              className="border rounded-lg"
            />
          </a>
        </div>
      </div>

      <section className="mx-auto container">
        <div className="flex md:flex-row flex-col-reverse items-center ">
          <div className="md:w-1/2 container px-5">
            <img src="/images/driver_image.jpg" className="rounded-lg w-full" />
            <div className="flex md:hidden block my-3">
              <Link href="https://gocab.vercel.app/driver/login">
                <p
                  className="
             bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 cursor-pointer
                 "
                >
                  Get Started
                </p>
              </Link>
            </div>
          </div>

          <div className="container px-5 mx-auto  flex flex-col items-start md:w-1/2">
            <div className="flex flex-col w-full mb-4 text-left ">
              <h1 className="mb-8 text-3xl Avenir font-semibold text-black">
                Feel free to drive at your convenience and generate the income
                that suits your requirements.
              </h1>

              <h2 className="text-2xl text-gray-700">
                Earn income according to your timetable by providing rides,
                making deliveries, or even combining both options. You have the
                choice of using your own vehicle or selecting a rental from
                Gocab
              </h2>
            </div>

            <div className="flex md:block hidden">
              <Link href="https://gocab.vercel.app/driver/login">
                <p
                  className="
             bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 cursor-pointer
                 "
                >
                  Get Started
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container pt-20 mx-auto flex md:flex-row flex-col items-center justify-between">
        <div>
          <h1 className="mb-8 text-4xl Avenir font-semibold text-gray-900 md:text-left text-center">
            Download our Apps
          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 md:text-left text-center">
            Your ride and logistics request, will be settled in minutes
          </h1>

          <div className="flex justify-center md:block hidden" id="download">
            <a
              className="inline-flex mt-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-gray-900"
              href="https://play.google.com/store/apps/details?id=com.logistics.gocab"
            >
              {/* <span className="justify-center">Find out more</span> */}
              <Image
                src="/images/play_store.png"
                className="border rounded-lg"
                width={200}
                height={100}
              />
            </a>

            <a
              className="inline-flex px-1 py-1 mt-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-gray-900"
              href="#"
            >
              {/* <span className="justify-center">Apple Store</span> */}
              <Image
                src="/images/app_store.png"
                width={200}
                height={100}
                className="border rounded-lg"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center align-content-center mx-auto rounded-lg mb-20">
          <ImageSlideshow
            images={gocab_images}
            style=" transform hover:scale-110 transition-transform duration-100 ease-in-out"
            sub_image_class="md:mb-0 py-3 md:w-2/4 w-4/5 mx-auto text-center mx-auto rounded-lg"
          />

          <div className="flex justify-center md:hidden block my-8 w-5/6">
            <a
              className="inline-flex font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-gray-900"
              href="https://play.google.com/store/apps/details?id=com.logistics.gocab"
            >
              {/* <span className="justify-center">Find out more</span> */}
              <Image
                src="/images/play_store.png"
                className="border rounded-lg"
                width={200}
                height={100}
              />
            </a>

            <a
              className="inline-flex font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-gray-900"
              href="#"
            >
              {/* <span className="justify-center">Apple Store</span> */}
              <Image
                src="/images/app_store.png"
                width={200}
                height={100}
                className="border rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section> */}
    </section>
  );
}

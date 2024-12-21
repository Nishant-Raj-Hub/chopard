"use client";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useState } from "react";
import {
  Globe,
  Phone,
  MapPin,
  Menu,
  Search,
  User,
  Heart,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";

export default function Home() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    // Start Lenis
    lenis.start();

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener and stop Lenis on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.stop();
    };
  }, [lenis]);

  useEffect(() => {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(raf);
  }, [lenis]);

  const menuItems = [
    { title: "GIFTS", href: "#" },
    { title: "WATCHES", href: "#" },
    { title: "JEWELLERY", href: "#" },
    { title: "ACCESSORIES", href: "#" },
    { title: "LA MAISON", href: "#" },
    { title: "HIGHLIGHTS", href: "#" },
  ];

  const items = [
    {
      id: 1,
      image: "assets/watch.png",
      title: "ICE CUBE",
      price: "₹ 215,000.00",
      description: "Ring, Ethical Rose Gold, Half-Set Diamonds",
    },
    {
      id: 6,
      image: "assets/pendant2.png",
      title: "HAPPY HEARTS",
      price: "₹ 330,000.00",
      description: "Bracelet, Rose Gold",
    },
    {
      id: 5,
      image: "assets/watch2.jpg",
      title: "ALPINE EAGLE 41",
      price: "₹ 1,300,000.00",
      description: "41 MM, Automatic, Lucent Steel™",
    },

    {
      id: 3,
      image: "assets/pendant.png",
      title: "ALPINE EAGLE 41",
      price: "₹ 1,300,000.00",
      description: "41 MM, Automatic, Lucent Steel™",
    },
    {
      id: 4,
      image: "assets/pendantnew.png",
      title: "ICE CUBE",
      price: "₹ 390,000.00",
      description: "Pendant, Ethical Rose Gold, Diamonds",
    },

    {
      id: 7,
      image: "assets/pendant.png",
      title: "ALPINE EAGLE 41",
      price: "₹ 1,300,000.00",
      description: "41 MM, Automatic, Lucent Steel™",
    },
    {
      id: 2,
      image: "assets/watch.png",
      title: "HAPPY HEARTS",
      price: "₹ 330,000.00",
      description: "Bracelet, Rose Gold",
    },
  ];

  return (
    <div className="w-full">
      {/* Navigation */}
      <header
        className={`w-full fixed top-0 left-0 z-20 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md " : "bg-transparent"
        }`}
      >
        {/* Navbar Secondary */}
        <div className="navbar-secondary flex md:flex-row items-center justify-between px-4 md:px-8 py-2 font-medium text-black">
          {/* Navbar Secondary Start */}
          <div className="navbar-secondary-start hidden md:flex text-xs items-center space-x-4">
            <Link
              href="#"
              className="flex items-center space-x-1 hover:opacity-80"
            >
              <Globe className="h-4 w-4" />
              <span className="font-thin text-xs">INDIA</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-1 hover:opacity-80"
            >
              <Phone className="h-4 w-4" />
              <span className="font-thin text-xs">CONTACT</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-1 hover:opacity-80"
            >
              <MapPin className="h-4 w-4" />
              <span className="font-thin text-xs">BOUTIQUE</span>
            </Link>
          </div>

          {/*For Mobile & Tablet*/}
          <div className="gap-2 flex">
            <button
              onClick={toggleSidebar}
              type="button"
              className="hover:opacity-80"
            >
              <Menu className="h-5 w-5 flex md:hidden" />
            </button>
            <button type="button" className="hover:opacity-80">
              <Search className="h-5 w-5 flex md:hidden" />
            </button>

            {isOpen && (
              <div className="fixed inset-0 bg-white z-50 shadow-lg transition-all duration-300 ease-in-out">
                <div className="w-full h-full flex flex-col mt-16 px-4 leading-loose">
                  <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 text-gray-800 font-bold text-2xl"
                  >
                    ×
                  </button>
                  <nav className="flex flex-col space-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="transition duration-200 tracking-widest text-sm font-extralight hover:opacity-80"
                      >
                        <div className="flex justify-between border-b-2">
                          <div>{item.title}</div>
                          <div>{">"}</div>
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Navbar Secondary Section - Positioned at the bottom */}
                <div className="absolute bottom-0 w-full bg-white text-xs items-center space-x-4 px-4 py-2 border-t">
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="flex items-center space-x-1 hover:opacity-80"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="font-thin text-xs">INDIA</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center space-x-1 hover:opacity-80"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-thin text-xs">CONTACT US</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center space-x-1 hover:opacity-80"
                    >
                      <MapPin className="h-4 w-4" />
                      <span className="font-thin text-xs">BOUTIQUE</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navbar Secondary Center */}
          <div className="navbar-secondary-center flex justify-center items-center w-full">
            <Link
              href="/"
              className="font-rubik italic md:-translate-x-20 text-3xl font-mono tracking-wide"
            >
              Chopard
            </Link>
          </div>

          {/* Navbar Secondary End */}
          <div className="navbar-secondary-end flex items-center space-x-4">
            <button type="button" className="hover:opacity-80">
              <User className="h-5 w-5 hidden md:flex" />
            </button>
            <button type="button" className="hover:opacity-80">
              <Heart className="h-5 w-5" />
            </button>
            <button type="button" className="hover:opacity-80">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navbar Primary */}
        <div className="navbar-primary text-black w-full py-2">
          <nav className="menu hidden md:flex justify-center space-x-8 text-sm font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="transition duration-200 tracking-widest text-xs hover:opacity-80"
              >
                {item.title}
              </Link>
            ))}
            <p>|</p>
            <button type="button" className="hover:opacity-80">
              <Search className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Banner Section */}
      <div className="relative h-screen">
        <video
          src="/assets/bridge.mp4"
          autoPlay
          muted
          loop
          className="banner-video w-full h-full absolute top-0 left-0 object-cover"
        />
        <div className="absolute top-80 inset-0 flex justify-center items-center z-10 text-center">
          <div>
            <p className="text-white text-sm uppercase mb-4">
              Holiday Season Selection
            </p>
            <h1 className="text-4xl text-white md:text-5xl font-serif mb-6">
              A CHOPARD FAIRYTALE
            </h1>
            <button className="px-6 py-2 bg-black text-white hover:bg-gray-700 transition">
              Shop the Selection
            </button>
          </div>
        </div>
      </div>

      {/*carousel*/}
      <div className="w-full px-4 py-8 mb-28">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Featured Jewelry
        </h2>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={15}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium my-2">{item.price}</p>
                <span className="text-sm text-gray-500 text-center">
                  {item.description}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

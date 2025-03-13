"use client";

import {
  AlignLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Moon,
  Phone,
  Search,
  ShoppingBag,
  Sun,
} from "lucide-react";
import HeroImage from "../../public/hero-image.jpg";
import WomanCollection from "../../public/woman-collection.jpg";
import ManCollection from "../../public/man-collection.jpg";
import DerbyCollection from "../../public/derby-collection.jpg";
import LuxuryWatch from "../../public/luxury-watch.jpg";
import Avatar1 from "../../public/avatar-1.jpg";
import Avatar2 from "../../public/avatar-2.jpg";
import Avatar3 from "../../public/avatar-3.jpg";
import Avatar4 from "../../public/avatar-4.jpg";
import Avatar5 from "../../public/avatar-5.jpg";
import Avatar6 from "../../public/avatar-6.jpg";
import Avatar7 from "../../public/avatar-7.jpg";
import ApplePay from "../../public/payment-method/apple-pay.png";
import MasterCard from "../../public/payment-method/mastercard.png";
import Paypal from "../../public/payment-method/paypal.png";
import Visa from "../../public/payment-method/visa.png";
import Image from "next/image";
import { Bonheur_Royale } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { useDarkMode } from "./context/ThemeContext";

const bonheurRoyale = Bonheur_Royale({
  subsets: ["latin"],
  weight: ["400"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className={`cursor-pointer flex items-center gap-2 z-50 fixed rounded-full bottom-4 right-8 p-1.5 border transition-all duration-1000 ${
          !darkMode
            ? "bg-white/60 hover:bg-white text-black"
            : "bg-black/60 hover:bg-black text-white"
        }`}
      >
        <span>{!darkMode ? "Light Mode" : "Dark Mode"}</span>
        {!darkMode ? <Sun /> : <Moon />}
      </button>
      <nav className="flex items-center justify-between px-6 py-2 *:w-full">
        <div>
          <AlignLeft />
        </div>
        <div className={`text-center text-3xl ${bonheurRoyale.className}`}>
          GM Apparel
        </div>
        <div className="flex justify-end items-center gap-3">
          <span>About</span>
          <span>FAQs</span>
          <span className="border rounded-full p-3">
            <ShoppingBag size={20} />
          </span>
        </div>
      </nav>
      <main className="flex flex-col gap-4 px-6">
        <section className="flex justify-between">
          <div className="flex gap-2 items-center w-3/5">
            <select
              className="border h-10 px-2 rounded-full w-3xs"
              name="categories"
              id="categories"
            >
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
              <option value="Category 4">Category 4</option>
            </select>
            <div className="flex items-center gap-4 px-4 border h-10 rounded-full w-2xs">
              <input
                className="outline-none w-full"
                type="text"
                placeholder="search..."
              />
              <Search />
            </div>
          </div>
        </section>
        <section className="aspect-video text-[#662716] overflow-hidden flex flex-col justify-between rounded-2xl px-6 pt-16 pb-8 min-h-[500px] relative">
          <Image
            className="-z-10"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            quality={100}
            src={HeroImage}
            alt={"Hero Image"}
          />
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 ">
              <h1 className="text-7xl">
                We are digital <br /> meets fashions
              </h1>
              <div className="flex gap-3">
                <ArrowDownRight />
                <p>
                  Show your style with our limited edition products. <br /> With
                  GM Apparel, express yourself differently than others!
                </p>
              </div>
            </div>
            <div className="flex text-black gap-3 *:rounded-full *:h-fit *:p-2">
              <div className="bg-slate-500/90 opacity-50">
                <ArrowLeft />
              </div>
              <div className="bg-white">
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex items-center *:flex *:justify-center *:items-center *:rounded-full *:h-14 *:bg-white *:text-black">
              <div className="px-6">Start Shopping</div>
              <div className="aspect-square -translate-x-1">
                <ArrowUpRight />
              </div>
            </div>
          </div>
        </section>
        <section className="mb-10 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className={`text-3xl ${playfairDisplay.className}`}>
              Catalogs
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex text-black gap-3 *:rounded-full *:h-fit *:p-2">
                <div className="bg-slate-500/90 opacity-50">
                  <ArrowLeft />
                </div>
                <div className="bg-white">
                  <ArrowRight />
                </div>
              </div>
              <div className="border rounded-full px-3 py-2">View All</div>
            </div>
          </div>
          <h2 className="mx-auto text-5xl max-w-xl text-center">
            Fresh arrivals and new selections.
          </h2>
          <div className="flex gap-2 flex-col md:flex-row *:overflow-hidden *:flex *:relative *:flex-col *:justify-between *:h-96 *:w-full md:*:w-1/3 *:p-4 *:rounded-2xl">
            <div>
              <Image
                className="-z-10"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                quality={100}
                src={WomanCollection}
                alt={"Hero Image"}
              />
              <div className="flex items-center ml-auto w-fit *:flex *:justify-center *:items-center *:rounded-full *:h-10 *:bg-white *:text-black">
                <div className="px-6">Add Collection</div>
                <div className="aspect-square -translate-x-1">
                  <ArrowUpRight />
                </div>
              </div>
              <div className="bg-white w-fit text-black px-9 py-2 rounded-2xl">
                Women
              </div>
            </div>
            <div>
              <Image
                className="-z-10"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                quality={100}
                src={ManCollection}
                alt={"Hero Image"}
              />
              <div className="flex items-center ml-auto w-fit *:flex *:justify-center *:items-center *:rounded-full *:h-10 *:bg-white *:text-black">
                <div className="px-6">Add Collection</div>
                <div className="aspect-square -translate-x-1">
                  <ArrowUpRight />
                </div>
              </div>
              <div className="bg-white w-fit text-black px-9 py-2 rounded-2xl">
                Men
              </div>
            </div>
            <div>
              <Image
                className="-z-10"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                quality={100}
                src={DerbyCollection}
                alt={"Hero Image"}
              />
              <div className="flex items-center ml-auto w-fit *:flex *:justify-center *:items-center *:rounded-full *:h-10 *:bg-white *:text-black">
                <div className="px-6">Add Collection</div>
                <div className="aspect-square -translate-x-1">
                  <ArrowUpRight />
                </div>
              </div>
              <div className="bg-white w-fit text-black px-9 py-2 rounded-2xl">
                Derby
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className={`text-3xl ${playfairDisplay.className}`}>
            Accessories
          </h2>
          <div className="flex flex-col md:flex-row md:gap-2 gap-12 mt-5">
            <div className="shadow-2xl md:w-2/3 h-60 relative rounded-xl overflow-hidden">
              <span
                className={`absolute right-16 top-6 drop-shadow-2xl text-3xl shadow-black z-10 text-white font-black ${bebasNeue.className}`}
              >
                Strenght in Every Tick
              </span>
              <Image
                src={LuxuryWatch}
                alt="Luxury Watch"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="mt-12 mb-24 md:w-1/3 h-60 text-center md:pt-6 relative">
              <div className="-z-10 flex justify-center items-center absolute bottom-0 left-0 top-0 right-0">
                <div className="md:opacity-0 opacity-100 bg-[#f6876922] absolute rounded-full h-[700px] w-[700px]"></div>
                <div className="bg-[#f6876922] absolute rounded-full h-96 w-96"></div>
                <div className="bg-[#f6876977] absolute rounded-full h-72 w-72"></div>
                <div className="bg-[#d15d3d88] absolute rounded-full h-48 w-48"></div>
                <div className="bg-[#b6412199] absolute rounded-full h-30 w-30"></div>
              </div>
              <h2
                className={`md:hidden block text-3xl mb-12 ${playfairDisplay.className}`}
              >
                Our Customer is All Around The World!
              </h2>
              <div className="grid grid-cols-6 grid-rows-5 gap-4 w-full z-50 text-white">
                <div className="flex items-center overflow-hidden gap-2 bg-gradient-to-l border-[#66271677] border-2 p-1 rounded-full col-span-2 col-start-2">
                  <div className="relative overflow-hidden min-h-10 min-w-10 rounded-full">
                    <Image
                      src={Avatar1}
                      alt="Avatar 1"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  Steve
                </div>
                <div className="flex items-center overflow-hidden gap-2 bg-gradient-to-l border-[#66271677] border-2 p-1 rounded-full col-span-2 col-start-4">
                  <div className="relative overflow-hidden min-h-10 min-w-10 rounded-full">
                    <Image
                      src={Avatar2}
                      alt="Avatar 2"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="right"
                      quality={100}
                    />
                  </div>
                  Akira
                </div>
                <div className="flex items-center overflow-hidden gap-2 bg-gradient-to-l border-[#66271677] border-2 p-1 rounded-full col-span-2 col-start-2 row-start-3">
                  <div className="relative overflow-hidden min-h-10 min-w-10 rounded-full">
                    <Image
                      src={Avatar3}
                      alt="Avatar 3"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                      quality={100}
                    />
                  </div>
                  Ashton
                </div>
                <div className="flex items-center overflow-hidden gap-2 bg-gradient-to-l border-[#66271677] border-2 p-1 rounded-full col-span-2 col-start-1 row-start-2">
                  <div className="relative overflow-hidden min-h-10 min-w-10 rounded-full">
                    <Image
                      src={Avatar4}
                      alt="Avatar 4"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="right"
                      quality={100}
                    />
                  </div>
                  Joji
                </div>
                <div className="flex items-center overflow-hidden gap-2 bg-gradient-to-l border-[#66271677] border-2 p-1 rounded-full col-span-2 col-start-3 row-start-2">
                  <div className="relative overflow-hidden min-h-10 min-w-10 rounded-full">
                    <Image
                      src={Avatar5}
                      alt="Avatar 5"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      quality={100}
                    />
                  </div>
                  Carmen
                </div>
                <div className="flex items-center overflow-hidden gap-2 bg-gradient-to-l border-[#66271677] border-2 p-1 rounded-full col-span-2 col-start-5 row-start-2">
                  <div className="relative overflow-hidden min-h-10 min-w-10 rounded-full">
                    <Image
                      src={Avatar6}
                      alt="Avatar 6"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="right"
                      quality={100}
                    />
                  </div>
                  Tony
                </div>
                <div className="flex items-center overflow-hidden gap-2 bg-gradient-to-l border-[#66271677] border-2 p-1 rounded-full col-span-2 col-start-4 row-start-3">
                  <div className="relative overflow-hidden min-h-10 min-w-10 rounded-full">
                    <Image
                      src={Avatar7}
                      alt="Avatar 7"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      quality={100}
                    />
                  </div>
                  Pewds
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 px-6 py-4">
        <div className="flex flex-col gap-6 md:flex-row *:w-full md:*:w-1/2">
          {/* Left Footer */}
          <div className="flex flex-col gap-8 relative">
            <div>
              <h3 className={`text-3xl ${playfairDisplay.className}`}>
                Timeless Elegance, Crafted For You.
              </h3>
              <p className="font-light mt-4">
                At GM Apparel, we believe fashion is not just about clothing-it
                {`'`}s a reflection of individuality. With each collection, we
                combine luxury, quality, and innovative designs to bring
                timeless pieces that elevate your personal style.
              </p>
            </div>
            <div>
              <h4 className="mb-3">Get in Touch</h4>
              <div className="flex flex-col 2xl:flex-row gap-2 text-xs *:flex *:items-center *:gap-2">
                <span>
                  <Mail size={14} /> : ghazynovrial@gmail.com
                </span>
                <span>
                  <Phone size={14} /> : +62-813-1234-5678
                </span>
                <span>
                  <MapPin size={14} /> : Groove Street A11, South San Andreas,
                  24115
                </span>
              </div>
            </div>
          </div>
          {/* Right Footer */}
          <div className="flex flex-col gap-4">
            <h3
              className={`text-3xl w-fit border-b ${playfairDisplay.className}`}
            >
              Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.722717385507!2d103.84857947396317!3d1.342757561600703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da182ed2d2fefb%3A0x35941d63c355bf7!2sGM%20Apparel!5e0!3m2!1sid!2sid!4v1741542320430!5m2!1sid!2sid"
              height="230"
              className="md:w-[400px] w-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-2 mx-auto">
          We support :
          <div className="flex gap-2">
            <Image src={ApplePay} height={30} alt="Apple Pay" />
            <Image src={MasterCard} height={30} alt="Apple Pay" />
            <Image src={Paypal} height={30} alt="Apple Pay" />
            <Image src={Visa} height={30} alt="Apple Pay" />
          </div>
        </div>
      </footer>
    </>
  );
}

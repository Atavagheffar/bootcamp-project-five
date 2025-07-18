import Paypal from "../assets/Pic/Paypal.png";
import AmericanExpress from "../assets/Pic/AmericanExpress.png";
import Visa from "../assets/Pic/Visa.png";
import MasterCard from "../assets/Pic/MasterCard.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#061528] to-[#041b3d] text-white px-8 md:px-16 py-10 text-sm mt-10 relative font-Inter">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-[90%] mx-auto">
        {/* Company */}
        <div>
          <h3 className=" mb-4 text-white font-medium font-Inter text-[16px]">
            Company
          </h3>
          <ul className="space-y-2 font-light font-Inter text-[16px] text-gray-300">
            <li>about us</li>
            <li>blog</li>
            <li>returns</li>
            <li>order status</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-medium font-Inter text-[16px] mb-4 text-white">
            Info
          </h3>
          <ul className="space-y-2 font-light font-Inter text-[16px] text-gray-300">
            <li>How it works?</li>
            <li>our promises</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Contact us */}
        <div>
          <h3 className="font-medium font-Inter text-[16px]font-Inter text-[16px] mb-4 text-white">
            Contact us
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center font-light font-Inter text-[16px] gap-2">
              <FaMapMarkerAlt /> 123 Main Street, Anytown, USA
            </li>
            <li className="flex items-center font-light font-Inter text-[16px] gap-2">
              <FaPhone /> +1 (555) 123-4567
            </li>
            <li className="flex items-center font-light font-Inter text-[16px] gap-2">
              <FaEnvelope /> TechHeimSupport@gmail.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4 text-white">
            Sign up for News and updates
          </h3>
          <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="E-mail Address"
              className="bg-transparent px-3 py-2 w-full text-sm text-white outline-none"
            />
            <button className="bg-white text-black px-3 py-2 hover:bg-gray-200">
              ?
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-white">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t w-[90%] mx-auto border-gray-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img src={Paypal} alt="PayPal" className="h-6" />
          <img src={AmericanExpress} alt="Amex" className="h-6" />
          <img src={Visa} alt="Visa" className="h-6" />
          <img src={MasterCard} alt="MasterCard" className="h-6" />
        </div>

        <p className="text-white">
          © 2023 <span className="font-semibold">Tech Heim</span>.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">
            cookie settings
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <a href="#" className="hover:underline">
            Imprint
          </a>
        </div>
      </div>

      {/* Scroll to top */}
      <div className="absolute right-8 bottom-10 bg-blue-300 text-black rounded-full p-2 cursor-pointer shadow-lg">
        <FaArrowUp />
      </div>
    </footer>
  );
}

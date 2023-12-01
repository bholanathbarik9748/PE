import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-800 rounded-lg shadow m-4 dark:bg-primary">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="text-start hover:underline">
              PlutusEmporia™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex items-center text-2xl text-white">
            <li className="mr-4 hover:text-gray-300">
              <a href="https://www.instagram.com/plutusemporia" className="hover:underline">
                <FaInstagram />
              </a>
            </li>
            <li className="mr-4 hover:text-gray-300">
              <a href="https://m.facebook.com/profile.php/?id=61553778070289" className="hover:underline">
                <FaFacebook />
              </a>
            </li>
            <li className="mr-4 hover:text-gray-300">
              <a href="https://www.linkedin.com/in/plutus-emporia-3b57a42a1/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:underline">
                <FaLinkedin />
              </a>
            </li>
            {/* <li className="hover:text-gray-300">
              <a href="#" className="hover:underline">
                <FaTwitter />
              </a>
            </li> */}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

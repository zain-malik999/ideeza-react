import React from "react";
import { Label, Button } from "atoms";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div class="bg-transparent">
      <footer class="w-full pt-16 pb-4 font-pop">
        <div class="py-5 pb-10 lg:pb-20 mt-20 md:mt-16 w-full text-center">
          <Label
            value="Join our growing fabulous community"
            className="text-white md:text-4xl py-6 text-2xl font-semibold text-center"
          />
          <Button
            value="Join Now"
            className="text-white mb-10 lg:mb-0 font-semibold bg-ideeza-100 uppercase px-24 py-3 shadow-xl outline-none border-0 rounded-full"
          />
        </div>
        <div class="w-full px-6 md:px-16 lg:px-20">
          <div class="w-full py-4 flex items-end flex-wrap border-t-2 border-ideeza">
            <div class="w-full text-white font-light text-sm flex flex-wrap justify-between md:justify-center items-center">
              <Link class="md:px-3 cursor-pointer" to="/about">
                About
              </Link>
              <Link class="md:px-3 cursor-pointer" to="/pricing">
                Pricing
              </Link>
              <Link class="md:px-3 cursor-pointer" to="/contact">
                Contact
              </Link>
              <Link class="md:px-3 cursor-pointer" to="/investor">
                Investor
              </Link>
              <Link class="md:px-3 cursor-pointer" to="/help">
                Legal
              </Link>
            </div>
            <div class="w-full font-thin flex md:flex-row md:m-0 mt-5 flex-col md:items-end md:justify-between">
              <div class="w-full">
                <img
                  class="mx-auto md:mx-0"
                  width="90px"
                  src="/assets/images/footer-logo.png"
                />
              </div>
              <div class="text-center md:m-0 my-5 text-xs md:text-center w-full text-white">
                © 2016 Ideeza All rights reserved
              </div>
              <div class="text-center flex items-center md:justify-end justify-center w-full text-white">
                <Link
                  to="/agreement"
                  class="text-white pr-1 text-xs cursor-pointer"
                >
                  Privacy Policy
                </Link>
                |
                <Link
                  to="/agreement"
                  class="text-white text-xs cursor-pointer pl-1"
                >
                  Term & Condition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import React from "react";
import { Label, Button } from "atoms";
function ServiceProvider() {
  const data = [{}, {}];
  return (
    <div class="service">
      <div class="bg-sp-landing lg:h-screen md:h-75vh">
        <div class="flex justify-end items-center h-full">
          <div class="md:w-1/2 w-full flex flex-col md:items-start px-6 md:px-0 items-center md:text-left text-center py-32">
            <h2 class="text-white md:text-5xl text-4xl font-meri font-bold leading-loose">
              Become the 4th industrial revolution deriver
            </h2>
            <div class="lg:w-2/3 font-sans md:pr-10 lg:pr-0">
              <p class="text-lg leading-9 mt-6 text-white">
                Ideeza is first in kind that using the power of AI and automatic
                process for fast development and industrial connection.
              </p>
              <p class="text-lg leading-9 text-white">
                Beat competitors with massive and growing work channels that
                match to your expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-16 py-10 w-full text-center">
        <h3 class="px-6 md:text-5xl font-meri text-purple-700 text-3xl font-semibold">
          Connect your skills to Ideeza
        </h3>
        <p
          class="md:px-6 px-4 text-gray-200 md:text-3xl text-xl font-proxi pt-2 md:mb-14 m-auto lg:w-1/4"
          // style="max-width: 370px"
        >
          and start winning works automatically!
        </p>
        <div class="connect-dev md:py-10 flex items-center justify-center w-full">
          <div class="relative vid-sec top-0 left-0">
            <iframe
              class="absolute"
              src="https://www.youtube.com/embed/PdlO0NRWdtI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="my-20 skill-bg-img bg-cover font-pop">
        <div class="clip py-26 lg:py-40 text-center">
          <div class="flex w-full items-start md:px-16 px-6 pt-6 md:pt-8 lg:pt-0 flex-col h-full md:justify-center justify-center">
            <h1 class="text-white md:text-3xl text-xl md:text-left text-center font-meri">
              If you offer one of these abilities
            </h1>
            <h1 class="md:text-3xl text-xl self-center pb-1 px-4 my-12 lg:-ml-64 md:-ml-48 md:text-left text-center font-meri text-blue-400 font-bold border-b-2 border-ideeza">
              PCB Manufacturer
            </h1>
            <h1 class="text-white md:text-3xl text-xl md:text-left text-center font-meri self-center">
              Your place is with us!
            </h1>
          </div>
        </div>
      </div>
      <div class="flex items-center flex-wrap md:flex-row flex-col-reverse px-6 md:px-10 lg:px-16">
        <div class="w-full text-center md:text-left md:w-1/2 py-8 px-4 lg:px-20">
          <h3 class="text-purple-700 font-meri md:text-4xl text-3xl">
            Easy Earning
          </h3>
          <p class="text-black-600 md:text-lg font-sans text-sm tracking-wider py-2 mb-2">
            Receive works automatically based on your tools and capabilities.
          </p>
          <p class="text-blue-550 md:text-sm leading-loose font-sans text-xs">
            Ideeza's platform generates a blueprint based on machines' abilities
            and pushes work to you based on user optimization and your score.
          </p>
        </div>
        <div class="md:w-1/2 w-full px-20">
          <img src="/assets/landing/img_ref_2335.png" width="100%" />
        </div>
      </div>
      <div class="flex items-center flex-wrap md:flex-row flex-col px-6 md:p-10 lg:p-16">
        <div class="md:w-1/2 w-full px-20">
          <img
            class="lg:pl-20"
            src="/assets/landing/img_ref_2336.png"
            width="100%"
          />
        </div>
        <div class="w-full text-center md:text-left md:w-1/2 py-8 px-4 lg:px-20">
          <h3 class="text-purple-700 font-meri md:text-4xl text-3xl">
            Efficiently work
          </h3>
          <p class="text-black-600 md:text-lg font-sans text-sm tracking-wider py-2 mb-2">
            Less Idle time, more capacity.
          </p>
          <p class="text-blue-550 md:text-sm leading-loose font-sans text-xs">
            Ideeza's process finds works that fits in your feasibility and
            automatically connects to your potential customers.
          </p>
        </div>
      </div>
      <div class="flex items-center flex-wrap md:flex-row flex-col-reverse px-6 md:px-10 lg:px-16">
        <div class="w-full text-center md:text-left md:w-1/2 py-8 px-4 lg:px-20">
          <h3 class="text-purple-700 font-meri md:text-4xl text-3xl">
            Futurist supply chain
          </h3>
          <p class="text-black-600 md:text-lg font-sans text-sm tracking-wider py-2 mb-2">
            No more time wasted. Be part of collaborative tracking space
          </p>
          <p class="text-blue-550 md:text-sm leading-loose font-sans text-xs">
            Ideeza's platform stores key manufacturing and delivery data across
            the entire supply chain to track any issues that may arise.
          </p>
        </div>
        <div class="md:w-1/2 w-full px-20">
          <img src="/assets/landing/img_ref_2337.png" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default ServiceProvider;

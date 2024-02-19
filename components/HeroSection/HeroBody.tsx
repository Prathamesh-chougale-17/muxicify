import Image from "next/image";
import React from "react";
import HeroImage from "@/public/valo.gif";
import Link from "next/link";

const HeroBody = () => {
  return (
    <main className="text-white -z-10">
      <div className="relative">
        <Image
          src={HeroImage}
          alt="esport"
          className="w-full auto h-[800px] opacity-60"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl font-bold">Listen your own Online</h1>
          <h1 className="text-5xl font-bold">Music</h1>
          <p className="text-xl pt-5">
            We provide the best music for you. Listen to your favorite music and
            enjoy the moment.
          </p>

          <div className="mt-5">
            <Link href="/music">
              <button className="px-4 py-2 bg-white text-black rounded-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <p className="text-xl pt-5 w-full text-center">
          TRUSTED BY ARTIST, ORGANIZERS
        </p>
      </div>
    </main>
  );
};

export default HeroBody;

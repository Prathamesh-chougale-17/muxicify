"use client";
import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import Link from "next/link";
import { Games } from "@/sanity/sanity-util";
const TiltGamesCard = ({
  title,
  image,
  slug,
}: Games) => {
  // console.log(projects);
  return (
    <main className="flex bg-black m-5">
        <Link href={`/events/${slug}`}>
      <div className= "w-[300px] sm:w-[320px] rounded-2xl lg:m-1">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-2xl cursor-pointer bg-slate-800 w-full  mb-5 lg:mb-0"
        >
          <div className="relative items-end">
            {/* <Link href={`Projects/${slug}`}> */}
              <Image
                src={image}
                height={400}
                width={200}
                alt="project_image"
                className="w-full h-[300px] object-cover rounded-t-2xl"
              />
              <h3 className="text-white font-bold text-[24px] text-center bg-gray-600">{title}</h3>
          </div>
        </Tilt>
      </div>
      </Link>
    </main>
  );
};

export default TiltGamesCard;

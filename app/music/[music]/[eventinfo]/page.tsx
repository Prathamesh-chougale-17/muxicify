import ArtistName from "@/components/Cards/ArtistName";
import { getMusicbySlug } from "@/sanity/sanity-util";
import Image from "next/image";
import React from "react";

const SelectedMusic = async ({ params }: { params: { eventinfo: string } }) => {
  const music = await getMusicbySlug(params.eventinfo);
  return (
    <div className="bg-black">
      <div className="flex justify-center">
        <div className="w-1/2">
          <h1 className="text-4xl text-white p-4 font-bold capitalize text-center">
            {music.name}
          </h1>
          <div className="flex justify-center">
            <div className="w-1/2">
              <Image
                src={music.image}
                width={400}
                height={400}
                alt={music.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <audio controls>
              <source src={music.music} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="flex justify-center">
            <div className="w-1/2">
              <h1 className="text-4xl text-white p-4 font-bold border-b-2 border-white text-center">
                Artist
              </h1>
              <div>
                {music.artist.map((a) => (
                  <ArtistName key={a._ref} _id={a._ref} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMusic;

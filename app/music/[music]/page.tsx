import {
  getMoodBySlug,
  getGenre,
  getMusic,
  getAuth,
  getGenreBySlug,
} from "@/sanity/sanity-util";
import React from "react";
import Image from "next/image";
import GameBlock from "@/components/Cards/GameBlock";
import Link from "next/link";

const TournamentPage = async ({ params }: { params: { music: string } }) => {
  const mood = await getMoodBySlug(params.music);
  const genre = await getGenreBySlug(params.music);
  const artist = await getAuth();
  // const gameimage = mood.image;
  const music = await getMusic();
  return (
    <main className="bg-black">
      <div className=" mb-32">
        <Image
          src={mood.image}
          alt="Mood Images"
          height={400}
          width={400}
          className="w-full h-[500px]"
        />
        {/* <div className="text-center pt-4">
          <h1 className="text-5xl mt-3 ml-10 font-bold">Current music</h1>
          create a block for live stream
          <div className="flex justify-center">
            <div className="w-full h-[100px] mt-4 bg-gray-800 rounded-md">
              <h1 className="text-4xl text-white pt-1">
                <Link href="/events/valorant/valorant-clash/live">
                  <button className="bg-green-500 text-white py-3 px-6 rounded-md mt-2">
                    Live Stream
                  </button>
                </Link>
              </h1>
            </div>
          </div>
        </div> */}
        <div className="text-center pt-4">
          <h1 className="text-4xl">Musics</h1>
          {music?.length > 0 ? (
            music.map((p) =>
              p.moodid === mood._id ? (
                <Link href={`/music/${mood.slug}/${p.slug}`} key={p._id}>
                  <GameBlock
                    key={p._id}
                    name={p.name}
                    image={p.image}
                    artist="Udit Narayan"
                  />
                </Link>
              ) : (
                <div key={p._id}>No Music found</div>
              )
            )
          ) : (
            <div>No Music found</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default TournamentPage;

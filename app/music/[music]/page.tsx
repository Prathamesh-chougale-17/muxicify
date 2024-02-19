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
  // const gameimage = mood.image;
  const music = await getMusic();
  return (
    <main className="bg-black">
      {mood && (
        <div className=" mb-32">
          <Image
            src={mood.image}
            alt="Mood Images"
            height={400}
            width={400}
            className="w-full h-[500px]"
          />
          <div className="text-center pt-4">
            <h1 className="text-4xl">{mood.name} Music</h1>
            {music?.length > 0 ? (
              music.map((p) =>
                p.genreid === genre._id ? (
                  <Link href={`/music/${mood.slug}/${p.slug}`} key={p._id}>
                    {p.artist.map((a) => (
                      <GameBlock
                        key={p._id}
                        name={p.name}
                        image={p.image}
                        _id={a._ref}
                        price={p.price}
                      />
                    ))}
                  </Link>
                ) : null
              )
            ) : (
              <div>No Music found</div>
            )}
          </div>
        </div>
      )}
      {genre && (
        <div className=" mb-32">
          <Image
            src={genre.image}
            alt="Mood Images"
            height={400}
            width={400}
            className="w-full h-[500px]"
          />
          <div className="text-center pt-4">
            <h1 className="text-4xl">{genre.name} Music</h1>
            {music?.length > 0 ? (
              music.map((p) =>
                p.genreid === genre._id ? (
                  <Link href={`/music/${mood.slug}/${p.slug}`} key={p._id}>
                    {p.artist.map((a) => (
                      <GameBlock
                        key={p._id}
                        name={p.name}
                        image={p.image}
                        _id={a._ref}
                        price={p.price}
                      />
                    ))}
                  </Link>
                ) : null
              )
            ) : (
              <div>No Music found</div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default TournamentPage;

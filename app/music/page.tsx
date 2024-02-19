import TiltGamesCard from "@/components/Cards/HoverCard";
import { getMood, getGenre, MoodProps, GenreProps } from "@/sanity/sanity-util";

export const revalidate = 600;

const EventsPage = async () => {
  const mood = await getMood();
  const genre = await getGenre();
  return (
    <div className="bg-black">
      {/* {games?.length > 0 ? (
        games.map((p: GenreProps) => (
          <TiltGamesCard
            key={p.title}
            title={p.title}
            image={p.image}
            slug={p.slug}
            logo={p.logo}
          />
        ))
      ) : (
        <div>No Games found</div>
      )} */}
      {/* first  plot the Genre and add beutiful heading as genre and then add mood below the genre*/}
      <h1 className="text-4xl text-white p-4 font-bold border-b-2 border-white text-center">
        Genre
      </h1>{" "}
      <div className="flex w-full flex-wrap justify-center  sm:justify-center">
        {genre?.length > 0 ? (
          genre.map((p: GenreProps) => (
            <TiltGamesCard
              key={p.name}
              name={p.name}
              image={p.image}
              slug={p.slug}
              _id={p._id}
            />
          ))
        ) : (
          <div>No Genre found</div>
        )}
      </div>
      {/* <h1 className="text-4xl text-white">Mood</h1> design this more beytiful*/}
      <h1 className="text-4xl text-white p-4 font-bold border-b-2 border-white text-center">
        Mood
      </h1>
      <div className="flex w-full flex-wrap justify-evenly  sm:justify-center">
        {mood?.length > 0 ? (
          mood.map((p: MoodProps) => (
            <TiltGamesCard
              key={p.name}
              name={p.name}
              image={p.image}
              slug={p.slug}
              _id={p._id}
            />
          ))
        ) : (
          <div>No Mood found</div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;

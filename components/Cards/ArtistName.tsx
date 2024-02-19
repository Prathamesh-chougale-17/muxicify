import { getAuth, getAuthById, getMusic } from "@/sanity/sanity-util";
import React from "react";

const ArtistName = async ({ _id }: { _id: string }) => {
  const artist = await getAuthById(_id);
  return <div>{artist.name}</div>;
};

export default ArtistName;

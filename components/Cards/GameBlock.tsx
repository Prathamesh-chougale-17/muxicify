import React from "react";
import Image from "next/image";
interface GameBlockProps {
  name: string;
  image: string;
  artist: string;
}

const GameBlock: React.FC<GameBlockProps> = ({ name, image, artist }) => {
  return (
    <div className="game-block bg-gray-800 border border-gray-700 p-4 flex justify-between items-center rounded-md shadow-md hover:bg-gray-700 my-6 mx-4">
      <div className="text-lg font-semibold text-white flex items-center">
        <Image src={image} alt="game" width={60} height={60} />
        <span className="ml-4">{name}</span>
      </div>
      <div className="text-lg text-gray-400">
        <div>{artist}</div>
      </div>
      <div className="flex justify-end">
        <div className="mr-9">
          <div className="mx-2">Rs 200</div>
          {/* <div>{artist}</div> */}
        </div>
      </div>
    </div>
  );
};

export default GameBlock;

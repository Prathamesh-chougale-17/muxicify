import React from "react";

const SelectedMusic = ({ params }: { params: { eventinfo: string } }) => {
  return <div className="bg-black">{params.eventinfo}</div>;
};

export default SelectedMusic;

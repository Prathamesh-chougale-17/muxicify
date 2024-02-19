"use client";
import React from "react";
import Countdown from "react-countdown";

interface RendererArgs {
  hours: number;
  minutes: number;
  days: number;
  seconds: number;
  completed: boolean;
}

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: RendererArgs) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days}:{hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const CountDownFile = ({ timer }: { timer: number }) => {
  return <Countdown date={Date.now() + timer} renderer={renderer} />;
};

export default CountDownFile;

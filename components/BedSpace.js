'use client'

import React, { useState, useEffect } from 'react';

const BedSpace = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the countdown values
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else if (hours > 0) {
        setMinutes(59);
        setHours(hours - 1);
      } else if (days > 0) {
        setHours(23);
        setMinutes(59);
        setDays(days - 1);
      } else {
        // The countdown has reached 0, you can take appropriate action here
        clearInterval(interval);
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div className='items-center  flex justify-center flex-col mt-20'>
      <h1 className='md:text-[40px] mb-10 text-[30px] font-bold text-center'>BedSpace/Apartment Coming soon</h1>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{days}</span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{hours}</span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{minutes}</span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{seconds}</span>
          sec
        </div>
      </div>
    </div>
  );
};

export default BedSpace;

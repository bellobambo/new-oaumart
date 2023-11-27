import React from 'react'
import ClockLoader from "react-spinners/ClockLoader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
    <ClockLoader color="#bbc2c1" />
  </div>
  )
}

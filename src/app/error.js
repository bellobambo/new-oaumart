'use client'
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {

    console.error(error)
  }, [error])
 
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
        className="btn btn-active btn-accent my-3"
      >
        Try again
      </button>
    </div>
  )
}
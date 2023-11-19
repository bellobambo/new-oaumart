import React from 'react'
import SignUp from './SignUp'

 const Appbar =() => {
  return (
    <header className='flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow'>
        <SignUp/>
    </header>
  )
}
export default Appbar
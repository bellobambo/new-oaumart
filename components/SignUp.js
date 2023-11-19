'use client'


import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const  SignUp = () => {

    const { data: session } = useSession();

    if (session && session.user) {

        return (
            <div children='flex flex-row flex-1 '>
                <p className='text-sky-600'> {session.user.name}</p>
                <button onClick={() => signOut()} className='text-red-600'>signOut</button>
            </div>
        )
    }

    return (
        <button onClick={() => signIn()} className='text-green-600 ml-auto'>
            signIn
        </button>
    )
}

export default SignUp
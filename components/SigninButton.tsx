"use client";

import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const SigninButton = () => {

const {data:session}= useSession();

if(session && session.user)
{
return(
    <div className='flex bg-white rounded-2xl w-full items-center justify-center p-3'>
    <Link href={'/login'} className='flex flex-row w-full items-center' style={{ whiteSpace: 'nowrap' }}>
      <Image src={'./assets/google_logo.svg'} alt={''} width={50} height={50} />
      <div className="ml-4 flex-1 items-center">
        <h1 className='font-semibold text-black text-lg md:text-2xl lg:text-2xl'>Sign in with Google</h1>
      </div>
    </Link>
  </div>
)
}
  return  (
    <div className='flex bg-white rounded-2xl w-full items-center justify-center p-3'>
    <Link href={'/login'} className='flex flex-row w-full items-center' style={{ whiteSpace: 'nowrap' }}>
      <Image src={'./assets/google_logo.svg'} alt={''} width={50} height={50} />
      <div className="ml-4 flex-1 items-center">
        <h1 className='font-semibold text-black text-lg md:text-2xl lg:text-2xl'>Sign in with Google</h1>
      </div>
    </Link>
  </div>
  )
}

export default SigninButton;
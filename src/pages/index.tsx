import React, { Children } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Providers from '../../components/Providers';
import { ChildProcess } from 'child_process';
import { signIn, useSession } from 'next-auth/react';

export default function Home() {
  const shouldSetBackground = true; 
  
  const dynamicBackgroundClass = shouldSetBackground ? 'bg-purple-#8b5cf6' : 'bg-purple-#8b5cf6';

 
  return (
    <>
      <main className={`min-h-screen items-center flex flex-col md:flex-row lg:flex-row bg-cover bg-center bg-no-repeat h-full w-full relative ${dynamicBackgroundClass}`}
        id="background"
        style={{ backgroundImage: `url('./assets/background.png')` }}>
        <div id="LogInPageRoot" className="flex flex-col items-center md:flex-row lg:flex-row w-full">
        <div className="text-4xl md:text-6xl lg:text-8xl font-ramabhadra text-white text-center md:text-left lg:text-left w-full md:w-1/2 lg:w-1/2 p-6 md:p-12 lg:p-12 whitespace-nowrap">
        <h1 className="mb-2">Are you lost?</h1>
        <h1 className="mb-2">It happens to</h1>
        <h1>the best of us.</h1>
        </div>

          <div className='flex flex-col items-center md:ml-24 lg:ml-24 w-full md:w-1/2 lg:w-1/2 p-6 md:p-12 lg:p-12'>
            <div className='flex flex-row w-full items-center justify-center md:justify-start lg:justify-start mb-6 md:mb-0 lg:mb-0'>
              <Image src="/assets/gator_logo.png" alt={'Logo'} width={90} height={90}/>
              <div className="ml-4 flex-1">
                <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-roboto-mono font-medium text-[#ff9d5b]">SF_MAPS</h1>
              </div>
            </div>
            <div className='flex bg-white rounded-2xl w-full items-center justify-center p-3'>
            <form>
              <Link href={'/home'}>
            <button type="button" onClick={() => signIn('google')} className='flex flex-row w-full items-center' style={{ whiteSpace: 'nowrap' }}>
              <Image src={'./assets/google_logo.svg'} alt={''} width={50} height={50} />
              <div className="ml-4 flex-1 items-center">
                
                <h1 className='font-semibold text-black text-lg md:text-2xl lg:text-2xl'>Sign in with Google</h1>
                
              </div>
              
            </button>
            </Link>
            </form>
            </div>

          <div>   
            <Link href={'/home'}>
          <h1 className=' text-cyan-100 mr-96 text-xl'>Continue as guest</h1>
          </Link>
          </div>
           
          </div>
        </div>
      </main>
    </>
  );
}


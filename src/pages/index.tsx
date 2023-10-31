import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const shouldSetBackground = true; 
  
  const dynamicBackgroundClass = shouldSetBackground ? 'bg-purple-#8b5cf6' : 'bg-purple-#8b5cf6';

  const handleContinueAsGuest = () =>
  {
    console.log('Continue as guest clicked')
  }
  
  return (
<>
<main className={`min-h-screen items-center justify-center flex flex-row bg-cover bg-center bg-no-repeat h-full w-full relative ${dynamicBackgroundClass}`}
  id="background"
  style={{ backgroundImage: `url('./assets/background.png')`, width: '100vw', height: '60vw' }}>
  <div id="LogInPageRoot" className="flex flex-col items-center lg:flex-row md:flex-row ">
    <div className="text-8xl font-ramabhadra text-white w-3/4 text-left  ml-40">
      <h1>Are you lost? </h1>
      <h1>It happens to </h1>
      <h1>the best of us.</h1>
    </div>
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <Image src="/assets/gator_logo.png" alt={'Logo'} width={50} height={50}/>
        <h1 className="text-5xl font-roboto-mono font-medium text-[#ff9d5b] text-right ">SF_MAPS</h1>
      </div>
      <Link href={'/login'}>
        <div className='flex flex-row bg-white rounded-2xl mt-4 lg:mt-46 md:mt-48'>
          <Image src={'./assets/google_logo.svg'} alt={''} width={50} height={50}/>
          <h1 className='text-black text-xl ml-4'>Sign in with Google</h1>
        </div>
      </Link>
    </div>
  </div>
</main>
{/* 
    <main className="min-h-screen flex items-center justify-center">
      <div id="LogInPageRoot" className="flex flex-col items-center">
        <div
          id="background"
          className={`bg-cover bg-center bg-no-repeat h-full w-full relative ${dynamicBackgroundClass}`}
          style={{ backgroundImage: `url('./assets/background.png')`, width: '100vw', height: '60vw' }}
        >
          <div className="text-8xl font-ramabhadra text-white w-3/4 text-left mt-48 ml-40 ">
            <div className="flex items-start justify-between w-full">
              <div>
                Are you lost? 
              </div>
              <img src="./public/assets/gator_logo.png" style={{width: '19.01vh', height: '15.01vh', marginLeft:'15.07vh' }} ></img>
              <div className="text-5xl font-roboto-mono font-medium text-[#ff9d5b] text-right ">
                SF_MAPS
              </div>
            </div>
          </div>
          <div className="text-8xl font-ramabhadra text-white w-3/4 text-left  ml-40 ">
             It happens to 
          </div>
          <div className="text-8xl font-ramabhadra text-white w-3/4 text-left  ml-40 ">
             the best of us.
          </div>
          <div>
            <div>
              <div>
              </div>
            </div>
            <div className='bg-white flex flex-row'>
              <Image 
                src={'/assets/image1.png'} 
                alt={''}
                width={50}
                height={50}
                className= "w-24 h-24 text-right ml-96"/>

            </div>
            <button className="text-xl font-ramabhadra text-[#4ae7ff]  w-3/5 text-right ml-96 h-full"
            onClick={handleContinueAsGuest}>
              Continue as guest.
              </button>
          </div>
        </div>
      </div>
    </main> */}
    </>
  );
}

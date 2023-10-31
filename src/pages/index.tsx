import React from 'react';

export default function Home() {
  const shouldSetBackground = true; 
  
  const dynamicBackgroundClass = shouldSetBackground ? 'bg-purple-#8b5cf6' : 'bg-purple-#8b5cf6';

  const handleContinueAsGuest = () =>
  {
    console.log('Continue as guest clicked')
  }
  
  return (
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
              <img src="./public/assets/gator_logo.png" alt="logo" 
              className=''/>
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
            <div>
              <img src="https://public/assets/image1.png" alt="Google Logo"
              className= "w-24 h-16 text-right ml-96" />
            </div>
            <button className="text-xl font-ramabhadra text-[#4ae7ff]  w-3/5 text-right ml-96 h-full"
            onClick={handleContinueAsGuest}>

              Continue as guest.
              </button>
          </div>
        </div>
      </div>
    </main>
  );
}

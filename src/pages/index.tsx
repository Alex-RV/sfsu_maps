import React from 'react';

export default function Home() {
  const shouldSetBackground = true; 
  

  const dynamicBackgroundClass = shouldSetBackground ? 'bg-purple-#8b5cf6' : 'bg-purple-#8b5cf6';
  
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div id="LogInPageRoot" className="flex flex-col items-center">
        <div
          id="background"
          className={`bg-cover bg-center bg-no-repeat h-full w-full relative ${dynamicBackgroundClass}`}
          style={{ backgroundImage: `url('./assets/background.png')`, width: '100vw', height: '60vw' }}
        >
          <div className="text-8xl font-ramabhadra text-white w-3/4 text-left mt-48 ml-40 ">
            Are you lost? 
          </div>
          <div className="text-8xl font-ramabhadra text-white w-3/4 text-left  ml-40 ">
             It happens to 
          </div>
          <div className="text-8xl font-ramabhadra text-white w-3/4 text-left  ml-40 ">
             the best of us.
          </div>
          <div>
            <div>
              <div className="text-5xl font-roboto-mono font-medium text-[#ff9d5b]  w-3/4 text-right my-50 ml-40">
                SF_MAPS
              </div>
            </div>
            <div>
              <img src="./public/assets/image1.png" alt="Google Logo"
              className= "w-24 h-16 text-right ml-9" />
              <div className="text-3xl font-open-sans font-bold text-center">
                Continue with Google.
              </div>
            </div>
            <div className="text-xl font-ramabhadra text-[#4ae7ff]  w-3/5 text-right ml-96 h-full">
              Continue as guest.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

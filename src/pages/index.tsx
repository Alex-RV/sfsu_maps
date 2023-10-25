import React from 'react';

export default function Home() {
  const shouldSetBackground = true; 

  const dynamicBackgroundClass = shouldSetBackground ? 'bg-purple-500' : 'bg-purple-500';

  return (
    <main className="min-h-screen flex items-center justify-center bg-purple">
      <div id="LogInPageRoot" className="flex flex-col items-center">
        <div
          id="background"
          className={`bg-cover bg-center bg-no-repeat h-screen w-full relative ${dynamicBackgroundClass}`}
          style={{ backgroundImage: `url('./assets/background.png')` }}
        >
          <div className="text-6xl font-ramabhadra text-white w-1/2 text-center mt-48">
            Are you lost? It happens to the best of us.
          </div>
          <div className="flex flex-col items-center mt-4 space-y-12">
            <div className="flex items-center space-x-8">
              <div className="bg-cover bg-center bg-no-repeat w-32 h-32"></div>
              <div className="text-5xl font-roboto-mono font-medium text-orange mt-4">
                SF_MAPS
              </div>
            </div>
            <div className="w-[480px] h-40 bg-white rounded-lg flex items-center justify-end px-8">
              <img src="" alt="Google Logo" className="w-24 h-16 absolute top-1 left-2" />
              <div className="text-3xl font-open-sans font-bold text-center relative">
                Continue with Google.
              </div>
            </div>
            <div className="text-xl font-ramabhadra text-[#4ae7ff] ml-6 w-3/5">
              Continue as guest.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

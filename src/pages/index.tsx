import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className=""
    ><div id="LogInPageRoot" className="flex flex-col pb-5 w-full">
    <div
      id="Image1"
      className="bg-[undefined] bg-cover bg-50%_50% bg-blend-overlay bg-no-repeat flex flex-row justify-between mt-[-12px] h-[984px] shrink-0 items-start pt-48 pl-24 pr-32"
    >
      <div className="text-[96px] font-['Ramabhadra'] tracking-[-1.06] leading-[144px] text-white w-1/2">
        Are you lost? It happens to the best of us.{" "}
      </div>
      <div className="flex flex-col justify-between mt-4 gap-[109px] items-start">
        <div className="flex flex-row gap-8 w-[421px] items-start">
          <div
            id="Image2"
            className="bg-[undefined] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col items-start pt-1 pb-0"
          >
            <img src="" id="GatorLogo" className="mr-0" />
          </div>
          <div className="text-5xl font-['Roboto_Mono'] font-medium tracking-[-0.91] leading-[72px] text-[#ffa629] mt-4 w-2/3">
            SF_MAPS
          </div>
        </div>
        <div className="flex flex-col gap-12 w-[480px] h-40 shrink-0 items-start">
          <div className="bg-white self-stretch relative flex flex-col justify-center items-end pt-5 pb-4 px-8 rounded-[20px]">
            <img
              src=""
              id="GoogleLogo"
              className="w-24 h-16 absolute top-1 left-2"
            />
            <div className="text-center text-3xl font-['Open_Sans'] font-bold tracking-[-0.35] leading-[48px] relative">
              Continue with Google.
            </div>
          </div>
          <div className="text-xl font-['Ramabhadra'] tracking-[-0.22] leading-[30px] text-[#0dff7c] ml-6 w-3/5">
            Continue as guest.
          </div>
        </div>
      </div>
    </div>
  </div>
    </main>
  )
}

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden" id="banner">
      <div className="relative z-10">
        <video className="h-screen w-full object-cover blur-md" autoPlay loop muted playsInline>
          <source src="/intro-2.webm" type="video/webm" />
          {/* <source src="/intro-2.mp4" type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute z-20 top-0 left-0 right-0 h-full p-4 md:p-12 !pt-32 flex flex-col items-stretch gap-16 2xl:gap-28 3xl:gap-32">
        <div className="flex flex-col gap-7 justify-center items-center lg:mt-14 xl:mt-24 4xl:mt-56">
          <h1 className="gradient-heading text-center font-wide">
            <span className="block">VIRTUAL STREETS</span>
            <span className="block">REAL RUSH</span>
          </h1>
          <div className="flex flex-col gap-1 xs:gap-0 justify-center items-center">
            <p className="font-medium text-xl xs:text-lg text-center text-content-secondary">
              Discover custom cars, unique highway maps, and unmatched cut-up competitions.
            </p>
            <p className="font-medium text-xl xs:text-lg text-center text-cyan-400">Enjoy monthly updates and exclusive content</p>
            <p className="font-medium text-xl xs:text-lg text-center">and see why nearly 1 million drivers are part of our community.</p>
          </div>
          <Button className="mt-3 bg-purple-600 text-white !px-7 !py-6 text-lg font-black uppercase font-roboto italic hover:bg-purple-700 transition-all duration-500">
            GET STARTED!
          </Button>
        </div>
      </div>
    </div>
  )
}


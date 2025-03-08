import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function SignIn() {
  return (
    <div className="w-full px-10">
      <div className="md:h-screen">
        <div className="w-full relative h-[100svh] overflow-hidden grid md:grid-cols-2 4xl:grid-cols-3 content-center justify-center items-center gap-x-20 xs:px-8">
            <video className="fixed w-[150%] -left-1/4 md:left-0 max-w-none md:w-full md:h-[120svh] md:-top-1/10 opacity-50 object-center" autoPlay loop muted playsInline>
                <source src="/world.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="items-start rounded-xl w-full backdrop-blur-md bg-top-light-2 border border-border p-6 flex flex-col gap-3 z-20 justify-between xs:justify-normal h-full overflow-y-auto">
                <div className="2xl:h-20">
                    <Image src="/footer-logo.png" alt="No Hesi" width={200} height={200} className="m-auto"/>
                </div>
                <h4 className="font-[900] text-xl md:text-xl uppercase font-normal-wide">
                    login for the best experience
                </h4>
                <Button variant="outline" className=" text-white bg-transparent border border-white w-full !px-7 !py-6 text-sm xs:text-md font-black uppercase font-roboto italic hover:bg-gray-300/50 transition-all duration-500">
                    <img
                        className="h-6 w-6 2xl:w-8 2xl:h-8"
                        src="/Discord.svg"
                        alt="cdn"
                        />
                    LOG IN VIA DISCORD
                </Button>

                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-16 md:w-18 h-[2px] my-4 bg-top-light-10" />
                    <span className="text-content-secondary px-3 font-medium left-1/2">or</span>
                    <hr className="w-16 md:w-18 h-[2px] my-4 bg-top-light-10" />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email"  placeholder="example@mail.com" />
                </div>

                <Button className="mt-3 w-full bg-purple-600 text-white !px-7 !py-6 text-sm xs:text-md font-black uppercase font-roboto italic hover:bg-purple-900 transition-all duration-500">
                    SEND MAGIC LINK
                </Button>

                <p className="text-center text-sm font-inter text-content-tertiary w-4/5 md:w-full lg:w-4/5 mx-auto mt-4">
                    By logging in, you agree to our Terms of Service and acknowledge having read our Privacy Policy.
                </p>

                
            </div>
            <video className="z-20 w-full 4xl:w-4/5 mx-auto md:block hidden 4xl:col-span-2" autoPlay loop muted playsInline>
                <source src="/welcome.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </div>
  )
}


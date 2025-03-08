import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/homepage/hero-section"
import { AboutSection } from "@/components/homepage/about-section"
import { ServersSection } from "@/components/homepage/servers-section"
import { PlansSection } from "@/components/homepage/plans-section"
import { ContactSection } from "@/components/homepage/contact-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Crown, CarFront } from "lucide-react"

export default function SignIn() {
  return (
    <div className="pt-32 px-5">
        <NavBar />
        <div className="relative rounded-xl overflow-hidden bg-cover bg-center flex flex-col justify-between items-start" style={{ backgroundImage: `url(/discord_banner.webp)` }}>  
            <div className="absolute inset-0 bg-black opacity-65"></div> 

             <div className="relative flex items-center justify-center md:justify-end w-full p-4 gap-3">
                <div className="flex items-center text-content-secondary gap-2 font-inter text-sm md:text-lg font-semibold ml-2">
                    <img src="/gb.webp" alt="Flag" className="w-6 h-4 mb-2" />
                    <h2>Participated from Feb. 13, 2025</h2>
                </div>
                <Button variant="ghost" className="font-bold">
                    <img className="h-4 w-4" src="/user-profile-share.svg" alt="Share Icon" />
                    <span>Share Profile</span>
                </Button>
            </div>    
                 
            <div className="relative flex flex-col px-8 pb-10 gap-2 md:flex-row justify-center md:justify-start items-center w-full">
                <Avatar className="w-35 h-auto justify-center items-center">
                    <AvatarImage src="https://cdn.discordapp.com/avatars/356092004859379713/0a8ee4a4688b2113b73fc8682cf44b82" alt="Avatar" />
                    <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center items-center md:items-start">
                    <div className="flex items-center w-fit gap-2 px-2 py-1 bg-gray-300/40 text-white text-md font-normal-wide font-black rounded-sm">
                        <Crown className="h-5 w-5" />
                        <span className="text-">#24700</span>
                    </div>
                    <h1 className="text-2xl font-normal-wide font-bold py-2">
                        DENVERCODE
                    </h1>
                    <div className="flex gap-5 md:gap-10">
                        <div className="flex items-center gap-1">
                            <img src="/user-profile-discord.svg" alt="Discord Icon" className="w-6 h-6" />
                            <span className="font-semibold">operatorsilence</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="/user-profile-steam.svg" alt="Steam Icon" className="w-6 h-6" />
                            <span className="font-semibold">Antvez</span>
                        </div>
                    </div>
                    <h2 className="text-lg font-normal-wide font-bold py-2">
                        DRIVER
                    </h2>
                </div>
            </div>  
           
        </div>

        <h1 className="text-4xl font-bold py-7">
            Statistics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-4 p-3 border border-grey rounded-2xl">
           <div className="flex flex-col justify-between gap-4 p-5 border rounded-2xl w-full bg-top-light-10 border-border-df">
                <div className="flex gap-2 items-center">
                    <CarFront className="h-5 w-5"/>
                    <h1 className="text-sm font-semibold">
                        Total Speed Achieved
                    </h1>
                </div>
                <span className="text-2xl font-black font-normal-wide pt-3 pb-2">
                    229 km/h
                </span>
            </div>  
            <div className="flex flex-col justify-between gap-4 p-5 border rounded-2xl w-full bg-top-light-10 border-border-df">
                <div className="flex gap-2 items-center">
                    <CarFront className="h-5 w-5"/>
                    <h1 className="text-sm font-semibold">
                        Total Speed Achieved
                    </h1>
                </div>
                <span className="text-2xl font-black font-normal-wide pt-3 pb-2">
                    229 km/h
                </span>
            </div>  

            <div className="flex flex-col justify-between gap-4 p-5 border rounded-2xl w-full bg-top-light-10 border-border-df">
                <div className="flex gap-2 items-center">
                    <CarFront className="h-5 w-5"/>
                    <h1 className="text-sm font-semibold">
                        Total Speed Achieved
                    </h1>
                </div>
                <span className="text-2xl font-black font-normal-wide pt-3 pb-2">
                    229 km/h
                </span>
            </div>  
            <div className="flex flex-col justify-between gap-4 p-5 border rounded-2xl w-full bg-top-light-10 border-border-df">
                <div className="flex gap-2 items-center">
                    <CarFront className="h-5 w-5"/>
                    <h1 className="text-sm font-semibold">
                        Total Speed Achieved
                    </h1>
                </div>
                <span className="text-2xl font-black font-normal-wide pt-3 pb-2">
                    229 km/h
                </span>
            </div>  
        </div>

        
        
    </div>
  )
}


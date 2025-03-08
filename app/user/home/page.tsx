import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Crown, CarFront } from "lucide-react"
import StatCard from "@/components/profile/stat-card"

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-3 border border-grey rounded-2xl">
           <StatCard
                icon={<CarFront className="h-5 w-5" />}
                title="Total Speed Achieved"
                value="229 km/h"
                textColor="text-black text-gradient font-normal-wide uppercase"
            />
            <StatCard
                icon={<CarFront className="h-5 w-5" />}
                title="Distance Driven"
                value="72 km"
                textColor="text-black text-gradient font-normal-wide uppercase"
            />
            <StatCard
                icon={<CarFront className="h-5 w-5" />}
                title="Top Distance in one Session"
                value="60 km"
                textColor="text-black text-gradient font-normal-wide uppercase"
            />
            <StatCard
                icon={<CarFront className="h-5 w-5" />}
                title="Points Record (PB)"
                value="42,108,656"
                textColor="text-black text-gradient font-normal-wide uppercase"
                bgColor="bg-red-bg-top"
            />
            
        </div>

        <div className="flex flex-col sm:flex-row justify-between p-3 gap-4">
           <div className="flex flex-col gap-4 sm:w-1/3">
                <StatCard
                icon={<CarFront className="h-5 w-5" />}
                title="Total Crashes"
                value="104"
                textColor="text-black text-gradient font-normal-wide uppercase"
                />
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="Favorite Car"
                    value="bmw m3 e92"
                    textColor="text-black text-gradient font-normal-wide uppercase"
                />
           </div>
            <div className="flex flex-col sm:w-2/3 gap-4 p-5 border border-grey rounded-2xl justify-between">
                <div className="flex gap-2 items-center">
                    <CarFront className="h-5 w-5" />
                    <h1 className={`text-sm font-semibold text-white`}>Favourite Track</h1>
                </div>
                <span className="text-4xl font-black pt-3 pb-22 text-black text-gradient font-normal-wide uppercase">
                    shuto revival project beta
                </span>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between p-3 gap-4">
           <div className="flex flex-col gap-4 p-3 border border-grey rounded-2xl w-full">
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="Total Time spent Drifting"
                    value="00:00:09"
                    textColor="text-black text-gradient font-normal-wide uppercase"
                />
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="Top Time Drifting in one Session"
                    value="00:00:08"
                    textColor="text-black text-gradient font-normal-wide uppercase "
                    bgColor="bg-green-bg-top"
                />
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="All Time Close Calls in one Session"
                    value="720"
                    textColor="text-black text-gradient font-normal-wide uppercase"
                />
           </div>
            <div className="flex flex-col gap-4 p-3 border border-grey rounded-2xl w-full">
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="Total Time spent in Proximity"
                    value="00:00:34"
                    textColor="text-black text-gradient font-normal-wide uppercase"
                />
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="Top Time spent in Proximity in one Session"
                    value="00:00:15"
                    textColor="text-black text-gradient font-normal-wide uppercase "
                />
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="All Time Close Calls"
                    value="846"
                    textColor="text-black text-gradient font-normal-wide uppercase "
                />
           </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between p-3 gap-4 mb-15">
           <div className="flex flex-col gap-4 p-3 border border-grey rounded-2xl w-full">
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="Total Time spent Drifting"
                    value="00:00:09"
                    textColor="text-black text-gradient font-normal-wide uppercase"
                />
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="Top Time Drifting in one Session"
                    value="00:00:08"
                    textColor="text-black text-gradient font-normal-wide uppercase "
                />
           </div>
            <div className="flex flex-col gap-4 p-3 border border-grey rounded-2xl w-full h-fit">
                <StatCard
                    icon={<CarFront className="h-5 w-5" />}
                    title="Total Time spent in Proximity"
                    value="00:00:34"
                    textColor="text-black text-gradient font-normal-wide uppercase"
                />
           </div>
        </div>        
        <Footer/>
    </div>
  )
}


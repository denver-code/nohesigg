import Link from "next/link"
import { Bell, Star , Server, Crown, ChevronDown, Menu, LucideMenu} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function NavBar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-[100] w-full">
      <div className="sticky bg-top-dark-83 backdrop-blur-16 border border-gray-900 ml-9 mr-9 mt-5 rounded-xl flex items-center justify-between p-2 my-2 md:my-5 container-selection">
        <div className="flex items-center lg:gap-2 xl:gap-4 2xl:gap-6">
          <Link href="/" className="flex items-center gap-2 bg-white/5 p-3 px-5 rounded-md">
          <img src="/NoHesiLogo.svg" alt="No Hesi" className="h-5" />
          </Link>
          <div className="hidden xl:flex items-center lg-gap-2 xl:gap-4 2xl:gap-6">
            <Link href="#" className="text-sm text-content-secondary font-bold rounded-sm lg:p-1 xl:p-2 hover:bg-top-light-17 transition-all duration-500">
              Get started 
            </Link>
            <Link href="#" className="text-sm text-content-secondary font-bold rounded-sm lg:p-1 xl:p-2 hover:bg-top-light-17 transition-all duration-500">
              About Us
            </Link>
            <Link href="#" className="text-sm text-content-secondary font-bold rounded-sm lg:p-1 xl:p-2 hover:bg-top-light-17 transition-all duration-500">
              Partners
            </Link>
            <Link href="#" className="text-sm text-content-secondary font-bold rounded-sm lg:p-1 xl:p-2 hover:bg-top-light-17 transition-all duration-500">
              Contact
            </Link>
          </div>
        </div>
        <div className="xl:hidden flex items-center gap-4">
          <Button variant="ghost" size="icon" className="font-bold text-sm border bg-top-light-2 lg:p-1 xl:p-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-9 w-9 ">
              <AvatarImage src="https://cdn.discordapp.com/avatars/356092004859379713/0a8ee4a4688b2113b73fc8682cf44b82" alt="@denvercocode" />
              <AvatarFallback>DC</AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="icon" className="font-bold text-sm border bg-top-light-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300">
            <LucideMenu className="h-7 w-7" />
          </Button>
        </div>
        <div className="hidden xl:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-top-light-2 p-1 rounded-md">
            <Button variant="outline" size="sm" className="font-bold text-sm border bg-top-light-2 lg:p-1 xl:p-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300">
              <Star className="h-1 w-1" />
              <span>Subscriptions</span>
            </Button>
            <Button variant="outline" size="sm" className="font-bold text-sm border bg-top-light-2 lg:p-1 xl:p-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300">
              <Server className="h-2 w-2" />
              <span>Servers</span>
            </Button>
            <Button variant="outline" size="sm" className="font-bold text-sm border bg-top-light-2 lg:p-1 xl:p-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300">
              <Crown className="h-2 w-2" />
              <span>Leaderboard</span>
            </Button>

          </div>
          <div className="flex items-center gap-2 bg-top-light-2 p-1 rounded-md">
            <Button variant="ghost" size="icon" className="font-bold text-sm border bg-top-light-2 lg:p-1 xl:p-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300">
            <Bell className="h-5 w-5" />
          </Button>
          <Button className="font-bold flex items-center gap-1.5 text-sm border lg:p-1 xl:p-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-purple-600 hover:text-white-300 bg-purple-800  ">
            <Avatar className="h-7 w-7 ">
              <AvatarImage src="https://cdn.discordapp.com/avatars/356092004859379713/0a8ee4a4688b2113b73fc8682cf44b82" alt="@denvercocode" />
              <AvatarFallback>DC</AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-bold sm:inline-block">denvercode</span>
            <ChevronDown className="h-5 w-5" />
          </Button>
          </div>
        </div>
      </div>
    </header>
  )
}


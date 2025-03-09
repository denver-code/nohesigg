import { Tabs, TabsContent, TabsTrigger, TabsVerticalList } from "@/components/ui/tabs"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import Link from "next/link"
import { Switch } from "../ui/switch"
import { Info } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

export function FriendsTab() {
    return (
        <div className="mb-15">
            <div className="px-5 flex flex-col w-full">
                <h1 className="text-4xl font-bold">Friends</h1>
                <div className="flex justify-center items-center mt-[-100px] z-[-1]">
                    <img src="/findFriends.png" className="w-[398px] h-[398px]" alt=""></img>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="uppercase text-xl sm:text-4xl font-[1000] font-normal-wide mt-[-70px]">find new friends</h1>
                    <div className="flex items-center justify-center gap-3 mt-5">
                        <div className="grid w-full items-center gap-1.5">
                            <Input type="findfriends" id="findfriends" className="py-6 pl-3 font-bold" placeholder="Find Friends"/>
                        </div>
                        <Button className="bg-purple-600 text-white !px-7 !py-6 text-lg font-black uppercase font-roboto italic hover:bg-purple-700 transition-all duration-500">
                            SEARCH
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-10">
                    <h1 className="sm:text-4xl text-xl  font-bold">Requests (0)</h1>
                    <Button disabled variant="outline" className="text-white !px-7 !py-6 text-lg font-black uppercase font-roboto italic hover:bg-gray-700 transition-all duration-500">
                            SHOW ALL
                    </Button>
                </div>

                <div className="flex justify-between items-center mt-10">
                    <h1 className="sm:text-4xl text-xl  font-bold">My Friends (0)</h1>
                    <Button disabled variant="outline" className="text-white !px-7 !py-6 text-lg font-black uppercase font-roboto italic hover:bg-gray-700 transition-all duration-500">
                            SHOW ALL
                    </Button>
                </div>
            </div>
        </div>
    )
}
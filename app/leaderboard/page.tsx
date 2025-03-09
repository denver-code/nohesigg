import { NavBar } from "@/components/nav-bar";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Crown, Medal, Award, ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Leaderboard() {
  // Sample data array - replace this with your actual data source
  const leaderboardData = [
    {
      position: 1,
      player: "eddeboss12",
      points: "47,912,843,527",
      combo: "69064.0x",
      car: "subaru wrx sti gd kz",
      avgSpeed: "212km/h",
      distance: "88.0km",
      time: "00:25:00"
    },
    {
      position: 2,
      player: "speedracer",
      points: "42,156,789,321",
      combo: "58923.0x",
      car: "nissan skyline r34",
      avgSpeed: "198km/h",
      distance: "76.4km",
      time: "00:22:18"
    },
    {
      position: 3,
      player: "driftmaster99",
      points: "38,567,123,456",
      combo: "52148.0x",
      car: "toyota supra mk4",
      avgSpeed: "205km/h",
      distance: "82.1km",
      time: "00:24:05"
    },
    {
      position: 4,
      player: "racinglegend",
      points: "35,123,456,789",
      combo: "48752.0x",
      car: "mazda rx-7 fd",
      avgSpeed: "189km/h",
      distance: "72.8km",
      time: "00:23:10"
    },
    {
      position: 5,
      player: "turbocharger",
      points: "31,987,654,321",
      combo: "45321.0x",
      car: "honda civic type r",
      avgSpeed: "192km/h",
      distance: "70.5km",
      time: "00:22:02"
    }
  ];

  // Function to render position with appropriate icon based on rank
  const renderPosition = (position: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => {
    if (position === 1) {
      return (
        <div className="flex items-center w-fit gap-2 px-2 py-1 bg-yellow-500/40 text-white text-md font-bold rounded-sm">
          <Crown className="h-5 w-5" />
          <span>#{position}</span>
        </div>
      );
    } else if (position === 2) {
      return (
        <div className="flex items-center w-fit gap-2 px-2 py-1 bg-gray-400/40 text-white text-md font-bold rounded-sm">
          <Medal className="h-5 w-5" />
          <span>#{position}</span>
        </div>
      );
    } else if (position === 3) {
      return (
        <div className="flex items-center w-fit gap-2 px-2 py-1 bg-amber-700/40 text-white text-md font-bold rounded-sm">
          <Award className="h-5 w-5" />
          <span>#{position}</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center w-fit gap-2 px-2 py-1 bg-gray-300/40 text-white text-md font-bold rounded-sm">
          <span>#{position}</span>
        </div>
      );
    }
  };

  return(
    <div>
      <NavBar/>
      <div className="pt-16 px-5">
        <h1 className="text-4xl font-bold mb-10 mt-10">Leaderboard</h1>
        <Table>
          <TableCaption>Top player rankings based on performance</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-white font-semibold">Position</TableHead>
              <TableHead className="text-white font-semibold">Player</TableHead>
              <TableHead className="text-white font-semibold">Points</TableHead>
              <TableHead className="text-white font-semibold">Combo</TableHead>
              <TableHead className="text-white font-semibold">Car</TableHead>
              <TableHead className="text-white font-semibold">Avg Speed</TableHead>
              <TableHead className="text-white font-semibold">Distance</TableHead>
              <TableHead className="text-white font-semibold">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((player) => (
              <TableRow key={player.position} className={player.position === 1 ? "bg-yellow-500/10" : ""}>
                <TableCell>{renderPosition(player.position)}</TableCell>
                <TableCell className="font-medium text-lg">
                    <div className="flex gap-1 items-center">
                        <Avatar>
                            <AvatarImage src="https://cdn.discordapp.com/avatars/356092004859379713/0a8ee4a4688b2113b73fc8682cf44b82" alt="Avatar" />
                            <AvatarFallback>Avatar</AvatarFallback>
                        </Avatar>
                        {player.player}
                    </div>
                </TableCell>
                <TableCell className="font-medium text-lg">{player.points}</TableCell>
                <TableCell className="font-medium text-lg">{player.combo}</TableCell>
                <TableCell className="font-medium text-lg capitalize">{player.car}</TableCell>
                <TableCell className="font-medium text-lg">{player.avgSpeed}</TableCell>
                <TableCell className="font-medium text-lg">{player.distance}</TableCell>
                <TableCell className="font-medium text-lg">{player.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Controls */}
        <div className="flex justify-end gap-2 mt-5">
          <Button variant="secondary">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="secondary">1</Button>
          <Button variant="secondary">
            <ArrowRight className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-sm">
                <span>10</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuItem>10</DropdownMenuItem>
              <DropdownMenuItem>25</DropdownMenuItem>
              <DropdownMenuItem>50</DropdownMenuItem>
              <DropdownMenuItem>100</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
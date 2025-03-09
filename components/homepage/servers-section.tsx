import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image  from "next/image"

export function ServersSection() {
  const servers = [
    {
      name: "Realistic Traffic I SRP I Public - 7",
      type: "Realistic",
      players: "0/18",
      map: "SRP",
      image: "/about-story.jpeg",
      flag: "/eu.webp",
      tier: "Tier 0",
    },
    {
      name: "Heavy Traffic I SRP I Public - 1",
      type: "Heavy Traffic",
      players: "12/18",
      map: "415",
      image: "/415.webp",
      flag: "/eu.webp",
      tier: "Tier 0",
    },

    {
      name: "Heavy Traffic I SRP I Public - 1",
      type: "Heavy Traffic",
      players: "12/18",
      map: "415",
      image: "/415.webp",
      flag: "/eu.webp",
      tier: "Tier 0",
    },
     {
      name: "Realistic Traffic I SRP I Public - 7",
      type: "Realistic",
      players: "0/18",
      map: "SRP",
      image: "/about-story.jpeg",
      flag: "/eu.webp",
      tier: "Tier 0",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between mb-12">
        <h2 className="gradient-heading !text-left !capitalize !font-semibold pb-4 md:pb-0">Popular Servers</h2>
        <Button asChild variant="outline" className="italic border border-white px-6 py-7 text-lg font-bold">
          <Link href="/servers">EXPLORE ALL SERVERS</Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {servers.map((server, index) => (
          <div key={index} className="rounded-xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${server.image})` }}>
            <div className="h-48">
              <div className="p-4">
                <Button variant="ghost" className="bg-black/60 backdrop:blur-lg text-white rounded-full text-sm font-bold">
                  <Image src="/Cube.svg" alt="Map" width={20} height={20} />
                  <span>{server.tier}</span>
                </Button>
              </div>
            </div>
            <div className="bg-top-dark-83 backdrop-blur-md md:backdrop-blur-xs p-4">
              <img src={server.flag || "/placeholder.svg"} alt="Flag" className="w-6 h-4 mb-2" />
              <h3 className="text-lg font-black mb-1">{server.name}</h3>
              <p className="text-sm font-bold mb-4">{server.type}</p>
              <div className="flex flex-col justify-between font-bold text-md">
                <div className="flex items-center gap-2">
                  <Image src="/UsersThree.svg" alt="Players" width={24} height={24} />
                  <span>{server.players}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/Alien.svg" alt="Map" width={24} height={24} />
                  <span>{server.map}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


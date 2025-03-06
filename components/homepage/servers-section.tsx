import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ServersSection() {
  const servers = [
    {
      name: "Realistic Traffic I SRP I Public - 7",
      type: "Realistic",
      players: "0/18",
      map: "SRP",
      image: "/SRP.webp",
      flag: "/eu.webp",
      tier: "Tier 0",
    },
    // Add more server objects here...
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0">Popular Servers</h2>
        <Button asChild variant="outline">
          <Link href="/servers">EXPLORE ALL SERVERS</Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servers.map((server, index) => (
          <div key={index} className="rounded-xl overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${server.image})` }}>
              <div className="p-4">
                <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm">{server.tier}</span>
              </div>
            </div>
            <div className="bg-gray-900 p-4">
              <img src={server.flag || "/placeholder.svg"} alt="Flag" className="w-6 h-4 mb-2" />
              <h3 className="text-lg font-semibold mb-1">{server.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{server.type}</p>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>{server.players}</span>
                <span>{server.map}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


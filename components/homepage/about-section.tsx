import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-20" id="about">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0">
          No Hesi is a<br />
          Global Community
        </h2>
        <Button asChild variant="outline">
          <Link href="/about">READ ABOUT US</Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "WORLDWIDE INFLUENCE",
            description:
              "Our content has billions of views, and has created an entirely new community of driving enthusiasts. We have over a 100K active members that drive together across all continents.",
            icon: "/Frame-1.svg",
            color: "green",
          },
          {
            title: "OUR VISION",
            description:
              "Since the beginning, our vision has been to blend the real and virtual world, aligning our brand with the underground racing community. We partner with real-world brands to get you as close as possible to your dream builds with the most desirable cars in the world.",
            icon: "/Frame-2.svg",
            color: "yellow",
          },
          {
            title: "UNLIMITED POTENTIAL",
            description:
              "As the leading virtual car community, you have an opportunity to grow your own brand and following with hundreds of thousands of drivers across the globe. Create new connections that you can't make anywhere else.",
            icon: "/Frame-3.svg",
            color: "red",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-6 border border-gray-800 rounded-xl hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:shadow-${item.color}`}
          >
            <img src={item.icon || "/placeholder.svg"} alt={item.title} className="mb-8" />
            <h3 className={`text-${item.color}-500 text-xl font-bold mb-4`}>{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


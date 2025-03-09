import Link from "next/link"
import { Button } from "@/components/ui/button"


export function AboutSection() {
  const textColorMap = {
    green: "text-green-400",
    yellow: "text-yellow-300",
    red: "text-red-500",
  };

  const shadowColorMap = {
    green: "shadow-green-400/50",
    yellow: "shadow-yellow-300/50",
    red: "shadow-red-500/50",
  };

  return (
    <section className="container mx-auto py-20 px-3" id="about">
      <div className="flex flex-col justify-center items-center sm:items-start sm:flex-row sm:justify-between mb-12">
        <h2 className="gradient-heading sm:!text-left !capitalize !font-semibold pb-4 md:pb-0">
          No Hesi is a<br />
          Global Community
        </h2>
        <Button asChild variant="outline" className="italic border border-white px-6 py-7 text-lg font-bold">
          <Link href="/about">READ ABOUT US</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
            // @ts-ignore
            className={`p-6 border border-gray-800 rounded-xl hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:shadow-sm ${shadowColorMap[item.color]}`}
          >
            <img src={item.icon || "/placeholder.svg"} alt={item.title} className="mb-8" />
            {/* @ts-ignore */}
            <h3 className={`${textColorMap[item.color]} text-xl md:text-2xl xl:text-4xl font-wide font-[1000] mb-4`}>{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Bell, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-screen w-screen object-cover">
          <source src="/intro-2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        <header className="container px-4 py-4">
          <div className="mx-auto flex h-14 items-center justify-between rounded-full bg-black/60 px-4 backdrop-blur-sm">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-black"
                  >
                    <path d="M19 9.5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4.5" />
                    <path d="M5 15h14" />
                    <path d="M5 9.5h14" />
                    <path d="M19 5H5" />
                    <path d="M19 19H5a2 2 0 0 1-2-2v-2.5h18V17a2 2 0 0 1-2 2Z" />
                  </svg>
                </div>
                <span className="font-bold tracking-wider text-white">NO HESI</span>
              </Link>

              <nav className="hidden md:flex">
                <ul className="flex gap-6">
                  <li>
                    <Link href="#" className="text-sm font-medium text-white hover:text-white/80">
                      Get started
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm font-medium text-white/70 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm font-medium text-white/70 hover:text-white">
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm font-medium text-white/70 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="hidden border-gray-700 bg-black/50 text-white hover:bg-gray-800 sm:flex"
              >
                <Star className="mr-1 h-4 w-4" />
                <span>Subscriptions</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hidden border-gray-700 bg-black/50 text-white hover:bg-gray-800 sm:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 h-4 w-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="M6 8h4" />
                  <path d="M14 8h4" />
                  <path d="M6 12h4" />
                  <path d="M14 12h4" />
                  <path d="M6 16h4" />
                  <path d="M14 16h4" />
                </svg>
                <span>Servers</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hidden border-gray-700 bg-black/50 text-white hover:bg-gray-800 sm:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 h-4 w-4"
                >
                  <path d="M12 6V2H8" />
                  <path d="m16 10 4-4-4-4" />
                  <path d="M12 22v-4h4" />
                  <path d="m8 18-4-4 4-4" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <span>Leaderboard</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 rounded-full bg-purple-600 px-2 py-1">
                <Avatar className="h-8 w-8 border border-purple-400">
                  <AvatarImage src="/placeholder.svg" alt="@denvercocode" />
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <span className="hidden text-sm font-medium text-white sm:inline-block">denvercocode</span>
              </div>
            </div>
          </div>
        </header>

        <main className="container flex flex-col items-center justify-center px-4 py-20 text-center md:py-32">
          <h1 className="mb-6 font-sans text-5xl font-bold uppercase tracking-widest text-white md:text-7xl lg:text-8xl">
            <div>VIRTUAL STREETS</div>
            <div>REAL RUSH</div>
          </h1>
          <div className="max-w-3xl space-y-4">
            <p className="text-lg text-white md:text-xl">
              Discover custom cars, unique highway maps, and unmatched cut-up competitions.
            </p>
            <p className="text-lg">
              <span className="text-cyan-400">Enjoy monthly updates and exclusive content</span>
            </p>
            <p className="text-lg text-white">and see why nearly 1 million drivers are part of our community.</p>
          </div>
          <Button className="mt-10 bg-purple-600 px-8 py-6 text-lg font-bold uppercase tracking-wider text-white hover:bg-purple-700">
            GET STARTED!
          </Button>
        </main>
      </div>
    </div>
  )
}


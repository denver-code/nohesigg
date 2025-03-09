import Link from "next/link"

export function Footer() {
  return (
    <footer className="mx-2 border border-border rounded-xl px-6 py-5 bg-top-light-2 text-content-secondary">
      <div className="flex flex-col md:flex-row text-sm justify-between items-center md:items-start">
        <div>
          <img className="2xl:h-20" src="/footer-logo.png" alt="cdn" />
        </div>
        
      <div className="flex gap-2 col-span-2">
        <div className="flex flex-col gap-1">
          <Link
            href="/about"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            Contacts
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href="/get-started"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            Get started
          </Link>
          <Link
            href="/subscriptions"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            Subscription
          </Link>
          <Link
            href="/servers"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            Servers
          </Link>
          <Link
            href="/leaderboard"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            Leaderboard
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href="/privacy-policy"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-use"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            Terms Of Use
          </Link>
          <Link
            href="/refund-policy"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            Refund Policy
          </Link>
          <Link
            href="/cookie-policy"
            className="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
          >
            Cookie Policy
          </Link>
        </div>
      </div>

        <div className="col-span-2 flex items-start justify-end gap-4.5 mt-4 sm:mt-0">
          <a href="https://www.youtube.com/@NoHesiGG">
            <img
              className="h-6 w-6 2xl:w-8 2xl:h-8 opacity-50"
              src="/YoutubeLogo.svg"
              alt="cdn"
            />
          </a>
          <a href="https://discord.gg/nohesitation">
            <img
              className="h-6 w-6 2xl:w-8 2xl:h-8 opacity-50"
              src="/DiscordLogo.svg"
              alt="cdn"
            />
          </a>
          <a href="https://www.instagram.com/nohesigg/">
            <img
              className="h-6 w-6 2xl:w-8 2xl:h-8 opacity-50"
              src="/InstagramLogo.svg"
              alt="cdn"
            />
          </a>
          <a href="https://www.tiktok.com/@nohesigg">
            <img
              className="h-6 w-6 2xl:w-8 2xl:h-8 opacity-50"
              src="/TiktokLogo.svg"
              alt="cdn"
            />
          </a>
        </div>
      </div>
      <div className="container-section">
        <Link
          href="/terms-of-use"
          className="border-t mt-5 pt-5 w-full block max-w-screen-3xl mx-auto border-border text-sm"
        >
          NoHesi<span>™</span> 2025. All rights reserved.
        </Link>
      </div>
    </footer>
  )
}
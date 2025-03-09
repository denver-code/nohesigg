"use client";
import Link from "next/link"
import { Bell, Star , Server, Crown, ChevronDown, Menu, LucideMenu} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "What we do",
    href: "/about#what-we-do",
    description:
      "About our company, our products, our services, and our team.",
  },
  {
    title: "Our Story",
    href: "/about#our-story",
    description:
      "How we started and what drives us to create the best experience for our customers.",
  },
  {
    title: "Our Vision",
    href: "/about#our-vision",
    description:
      "Our vision is to be the leading provider of innovative and reliable solutions for our customers.",
  },
  {
    title: "What People say",
    href: "/about#what-people-say",
    description: "We have over 1 000 000 players in our community.",
  },
  {
    title: "Cars",
    href: "/content/cars",
    description:
      "In our collection we have over 100 customized and tuned cars!",
  },
  {
    title: "Maps",
    href: "/content/maps",
    description:
      "We selected best maps with customized checkpoints, traffic systems and weather.",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-8 p-2 flex flex-col gap-1">
      <div className="sticky bg-top-dark-83 backdrop-blur-md border border-gray-900 xl:mx-9 xl:mt-5 rounded-xl flex items-center justify-between p-2 my-2 container-selection">
        <div className="flex items-center lg:gap-2 xl:gap-4 2xl:gap-6">
          <Link href="/" className="flex items-center gap-2 bg-white/5 p-2 px-4 rounded-md">
          <img src="/NoHesiLogo.svg" alt="No Hesi" className="h-5" />
          </Link>
          <div className="hidden xl:flex items-center lg-gap-2 xl:gap-4 2xl:gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/get-started">
                  <NavigationMenuTrigger className="bg-transparent text-sm text-content-secondary font-bold rounded-sm lg:p-1 xl:p-2 hover:bg-top-light-17 transition-all duration-500">Getting started</NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild className=" bg-cover bg-center " style={{ 
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/discord_banner.webp)` 
                            }}>
                          <a
                            className="flex h-full w-full select-none flex-col justify-center rounded-md p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <img src="/NoHesiLogo.svg" alt="No Hesi" className="h-15" />
                            <div className="mb-1 mt-4 text-lg font-medium">
                              No Hesitation
                            </div>
                            <p className="text-sm leading-tight text-gray-200">
                             Cut trough the traffic like a pro!
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Check Requirements, Purchase & Install Assetto Corsa Ultimate Edition
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install CM, CSP and other plugins
                      </ListItem>
                      <ListItem href="/docs/connecting" title="Accessing Servers">
                        How to find, filter and connect to the servers
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem >
                  <NavigationMenuTrigger className="bg-transparent text-sm text-content-secondary font-bold rounded-sm lg:p-1 xl:p-2 hover:bg-top-light-17 transition-all duration-500">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="#" className="text-sm text-content-secondary font-bold rounded-sm lg:p-1 xl:p-2 hover:bg-top-light-17 transition-all duration-500">
              Partners
            </Link>
            <Link href="#" className="text-sm text-content-secondary font-bold rounded-sm lg:p-1 xl:p-2 hover:bg-top-light-17 transition-all duration-500">
              Contact
            </Link>

          </div>
        </div>
        <div className="xl:hidden flex items-center gap-4">
          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="border bg-top-light-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300">
              <Bell className="h-4 w-4" />
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="font-bold text-sm non-italic justify-center whitespace-nowrap hover:text-white-300 ">
              <Avatar className="h-9 w-9 ">
              <AvatarImage src="https://cdn.discordapp.com/avatars/356092004859379713/0a8ee4a4688b2113b73fc8682cf44b82" alt="@denvercocode" />
              <AvatarFallback>DC</AvatarFallback>
          </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/user/home">
              <DropdownMenuItem>  
                  Profile
              </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="font-bold text-sm border bg-top-light-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300 p-2">
             <LucideMenu className="h-4 w-4"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>  
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <DropdownMenuItem>Subscriptions</DropdownMenuItem>
              <DropdownMenuItem>Servers</DropdownMenuItem>
              <Link href="/leaderboard">
                <DropdownMenuItem>Leaderboard</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              
              <DropdownMenuSeparator />
                <Link href="/sign-in">
                  <DropdownMenuItem>
                      Sign in
                    </DropdownMenuItem>
                </Link>
              <DropdownMenuItem variant="destructive">Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
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
            <Link href="/leaderboard">
              <Button variant="outline" size="sm" className="font-bold text-sm border bg-top-light-2 lg:p-1 xl:p-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300">
              <Crown className="h-2 w-2" />
              <span>Leaderboard</span>
            </Button>
            </Link>

          </div>
          <div className="flex items-center gap-2 bg-top-light-2 p-1 rounded-md">
            <Popover>
              <PopoverTrigger className="font-bold text-sm border bg-top-light-2 lg:p-1 xl:p-2 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-top-light-17 hover:text-white-300">
                  <Bell className="h-5 w-5" />
              </PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4 py-4">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                          <label htmlFor="unread-toggle" className="text-sm font-medium">
                            Unread
                          </label>
                          <Switch id="unread-toggle" />
                      </div>
                      <Button variant="ghost" size="sm" >
                        <span className="text-sm font-medium">Mark all as read</span>
                      </Button>
                    </div>
                    <span className="text-sm text-muted-foreground text-center mt-5">
                      No Notifications found
                    </span>
                  </div>
              </PopoverContent>
            </Popover>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-bold flex items-center gap-1.5 text-sm border lg:p-1 xl:p-1 border-border-df text-content-secondary rounded-sm  non-italic transition-all duration-300 justify-center whitespace-nowrap hover:bg-purple-600 hover:text-white-300 bg-purple-800">
              <Avatar className="h-7 w-7 ">
                <AvatarImage src="https://cdn.discordapp.com/avatars/356092004859379713/0a8ee4a4688b2113b73fc8682cf44b82" alt="@denvercocode" />
                <AvatarFallback>DC</AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-bold sm:inline-block">denvercode</span>
              <ChevronDown className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/user/home">
                <DropdownMenuItem>
                    Profile
                </DropdownMenuItem>
                </Link>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href="/sign-in">
                <DropdownMenuItem>
                    Sign in
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem variant="destructive">Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}


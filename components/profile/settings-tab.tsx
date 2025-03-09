import { Tabs, TabsContent, TabsTrigger, TabsVerticalList } from "@/components/ui/tabs"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import Link from "next/link"
import { Switch } from "../ui/switch"

export function SettingsTab() {
    return (
        <div className="mb-15">
            
            <Tabs defaultValue="edit-profile" className="w-full flex sm:flex-row gap-6 sm:max-w-4xl">
                <TabsVerticalList className="mb-8 gap-3">
                    <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
                    <TabsTrigger value="basic-information">Basic Information</TabsTrigger>
                    <TabsTrigger value="social-links">Social Links</TabsTrigger>
                    <TabsTrigger value="marketing">Marketing</TabsTrigger>
                    <TabsTrigger value="other-settings">Other Settigns</TabsTrigger>
                </TabsVerticalList>

                <TabsContent value="edit-profile">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 p-5 border border-grey rounded-2xl justify-between">
                            <h1 className="text-2xl font-bold">
                                Avatar
                            </h1>   
                            <div className="flex gap-8">
                                <Avatar className="w-35 h-auto justify-center items-center">
                                    <AvatarImage src="https://cdn.discordapp.com/avatars/356092004859379713/0a8ee4a4688b2113b73fc8682cf44b82" alt="Avatar" />
                                    <AvatarFallback>Avatar</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col justify-center items-start gap-4">
                                    <Button asChild variant="outline" className="italic border border-white p-5 text-md font-bold">
                                        <Link href="#">UPLOAD IMAGE</Link>
                                    </Button>
                                    <p className="text-muted-foreground text-sm">
                                        Upload the file from your device. You need an image that is at least 1368 by 300 pixels.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col gap-4 p-5 border border-grey rounded-2xl justify-between">
                            <h1 className="text-2xl font-bold">
                                Profile Banner
                            </h1>   
                            <div className="flex flex-col gap-8">
                                <img src="/discord_banner.webp" alt="Banner" className="w-full max-w-3xl rounded-2xl" />
                                <div className="flex flex-col justify-center items-start gap-4">
                                    <Button asChild variant="outline" className="italic border border-white p-5 text-md font-bold">
                                        <Link href="#">UPLOAD IMAGE</Link>
                                    </Button>
                                    <p className="text-muted-foreground text-sm">
                                        Upload the file from your device. You need an image that is at least 184 by 184 pixels.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 p-5 border border-grey rounded-2xl justify-between">
                            <h1 className="text-2xl font-bold">
                                Privacy
                            </h1>   
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-start gap-4 font-bold text-md">
                                    <span>Private my page</span>
                                    <Switch />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    If you use this function, no one will see your stats.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <Button asChild variant="outline" className="text-white !px-7 !py-6 text-lg font-black uppercase font-roboto italic hover:bg-gray-700 transition-all duration-500">
                                <Link href="#">Cancel</Link>
                            </Button>
                            <Button className="bg-purple-600 text-white !px-7 !py-6 text-lg font-black uppercase font-roboto italic hover:bg-purple-700 transition-all duration-500">
                                Save
                            </Button>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="settings">
                    Test
                </TabsContent>
            </Tabs>
        </div>
    )
}
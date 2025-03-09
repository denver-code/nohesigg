import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileTab } from "@/components/profile/profile-tab"
import { Settings } from "lucide-react"
import { SettingsTab } from "@/components/profile/settings-tab"

export default function SignIn() {
  return (
    <div className="pt-32 px-5">
        <NavBar />
        <Tabs defaultValue="profile" className="w-full">
            <TabsList className="w-full mb-8">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
                <ProfileTab/>
            </TabsContent>

            <TabsContent value="settings">
                <SettingsTab/>
            </TabsContent>
        </Tabs>

        <Footer/>
    </div>
  )
}


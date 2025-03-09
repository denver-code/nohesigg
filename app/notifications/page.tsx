import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";



export default function Notifications() {
    return (
        <div>
            <NavBar />
            
            <div className="pt-25 px-5">
                <h1 className="text-2xl font-bold">Notifications</h1>
            </div>

            <div className="px-5">
                <p className="text-md font-semibold">No notifications to show</p>
            </div>
        </div>
    )
}
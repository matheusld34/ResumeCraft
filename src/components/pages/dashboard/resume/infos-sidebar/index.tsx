import { Link } from "lucide-react"
import Logo from "@/assets/logo.svg"
import { AIGenerationDropdown } from "./ai-generation-dropdown"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { BasicInfoSection } from "./sections/basic-info"

export const InfoSidebar = () => {
    return (
        <aside className="w-full h-full p-6 overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <Link href="/dashboard/resumes">
                    <Logo className="w-full max-w-[80px]" />
                </Link>

                <AIGenerationDropdown />
            </div>
            <Separator className="my-5" />

            <BasicInfoSection />
        </aside>
    )
}
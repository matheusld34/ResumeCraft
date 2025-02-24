import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ResumeContent } from "./resume-content"
import { StructureSidebar } from "./structure-sidebar"
import { InfoSidebar } from "./infos-sidebar"




export const ResumePage = () => {
    return (
        <main className="w-full h-screen overflow-hidden">
            <ResizablePanelGroup direction="horizontal" className="w-full h-full">
                <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
                    <InfoSidebar />
                </ResizablePanel>


                <ResizableHandle withHandle />
                <ResizablePanel>
                    <ResumeContent />
                </ResizablePanel>

                <ResizablePanel>
                    <ResumeContent />
                </ResizablePanel>
                <ResizableHandle withHandle />

                <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
                    <StructureSidebar />
                </ResizablePanel>

            </ResizablePanelGroup>

        </main>
    )
}
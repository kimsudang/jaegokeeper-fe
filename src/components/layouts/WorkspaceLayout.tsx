"use client";

import { WorkspaceHeader } from "@/components/layouts/workspace/WorkspaceHeader";
import WorkspaceSidebar from "@/components/layouts/workspace/WorkspaceSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

type WorkspaceLayoutProps = {
    children: ReactNode;
};

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 60)",
                    "--header-height": "calc(var(--spacing) * 16)",
                } as React.CSSProperties
            }
        >
            <WorkspaceSidebar variant="inset" className="border-r z-20" />
            <SidebarInset>
                <WorkspaceHeader defaultTitle="워크스페이스" />
                <ScrollArea className="h-[calc(100dvh-var(--header-height))]">{children}</ScrollArea>
                <Toaster richColors position="top-center" />
            </SidebarInset>
        </SidebarProvider>
    );
}

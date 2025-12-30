import GuestFooter from "@/components/layouts/guest/GuestFooter";
import GuestHeader from "@/components/layouts/guest/GuestHeader";
import { Toaster } from "@/components/ui/sonner";

export default function AuthpageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <GuestHeader />
      <div className="flex-1">
        {children}
        <Toaster position="bottom-right" />
      </div>
      <GuestFooter />
    </div>
  );
}

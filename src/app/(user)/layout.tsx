import GuestFooter from "@/components/layouts/guest/GuestFooter";
import GuestHeader from "@/components/layouts/guest/GuestHeader";

export default function AuthpageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <GuestHeader />
      <main className="flex-1">{children}</main>
      <GuestFooter />
    </div>
  );
}

import { NavbarAno } from "@/components/ano/Navbar/NavbarAno";

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <NavbarAno />
      <main className="">{children}</main>
    </div>
  );
}

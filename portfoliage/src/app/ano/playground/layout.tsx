import { NavbarAno } from "@/components/ano/Navbar/NavbarAno";

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-jakarta">
      <NavbarAno />
      <main className="">{children}</main>
    </div>
  );
}

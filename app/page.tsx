import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Vision } from "@/components/vision";
import { Pillars } from "@/components/pillars";
import { Audiences } from "@/components/audiences";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground page-bg page-bg-grid relative">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Pillars />
        <Audiences />
      </main>
      <Footer />
    </div>
  );
}

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Presentation from "@/components/Presentation";
import ServicesContact from "@/components/ServicesContact";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <Presentation />
        <Features />
        <Location />
        <ServicesContact />
        <Footer />
      </div>
    </main>
  );
}

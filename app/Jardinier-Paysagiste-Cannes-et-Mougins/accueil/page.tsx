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
        <Header businessName="Jardinier Paysagiste Cannes et Mougins" businessHref="/Jardinier-Paysagiste-Cannes-et-Mougins"/>
        <Hero businessName="Jardinier Paysagiste Cannes et Mougins"/>
        <Presentation 
          businessName="Jardinier Paysagiste Cannes et Mougins"
          profession=""
          location="Cannes"
        />
        <Features />
        <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
        <ServicesContact />
        <Footer 
          businessName="Jardinier Paysagiste Cannes et Mougins"
          phoneNumber="+33 6 63 78 31 34"
          address="22 Av. du Camp Long"
        />
      </div>
    </main>
  );
}

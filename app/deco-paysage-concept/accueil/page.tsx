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
        <Header businessName="Deco Paysage Concept" businessHref="/deco-paysage-concept"/> 
        <Hero businessName="Deco Paysage Concept"/>
        <Presentation 
          businessName="Deco Paysage Concept"
          profession="paysagiste"
          location="Cannes"
        />
        <Features />
        <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
        <ServicesContact />
        <Footer 
          businessName="Deco Paysage Concept"
          phoneNumber="+33 6 22 95 70 20"
          address="17 Bd de la Croisette"
        />
      </div>
    </main>
  );
}

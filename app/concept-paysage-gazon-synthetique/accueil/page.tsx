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
        <Header businessName="Concept Paysage - Gazon Synthétique" businessHref="/concept-paysage-gazon-synthetique"/>
        <Hero businessName="Concept Paysage - Gazon Synthétique"/>
        <Presentation 
          businessName="Concept Paysage - Gazon Synthétique"
          profession="paysagiste"
          location="Grasse"
        />
        <Features />
        <Location 
          cities={['Grasse', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Grasse, Cannes & Mandelieu" 
        />
        <ServicesContact />
        <Footer 
          businessName="Concept Paysage - Gazon Synthétique"
          phoneNumber="+33 6 62 76 99 46"
          address="Av. Sidi Brahim, 06130 Grasse"
        />
      </div>
    </main>
  );
}

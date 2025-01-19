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
        <Header businessName="Allô paysage Côte d'Azur" businessHref="/allo-paysage-cote-d-azur" /> 
        <Hero businessName="Allô paysage Côte d'Azur"/>
        <Presentation 
          businessName="Allô paysage Côte d'Azur"
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
          businessName="Allô paysage Côte d'Azur"
          phoneNumber="+33 7 78 31 81 56"
          address=""
        />
      </div>
    </main>
  );
}

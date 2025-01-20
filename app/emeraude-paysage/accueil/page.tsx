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
        <Header businessName="Emeraude Paysage" businessHref="/emeraude-paysage"/>
        <Hero businessName="Emeraude Paysage"/>
        <Presentation 
          businessName="Emeraude Paysage"
          profession="jardinier"
          location="Nice"
        />
        <Features />
        <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <ServicesContact />
        <Footer 
          businessName="Emeraude Paysage"
          phoneNumber="+33 6 23 11 55 09"
          address="9 Av. Cernuschi, 06100 Nice"
        />
      </div>
    </main>
  );
}

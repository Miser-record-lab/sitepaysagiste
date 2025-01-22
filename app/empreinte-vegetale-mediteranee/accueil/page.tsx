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
        <Header businessName="Empreinte Végétale Méditeranée" businessHref="/empreinte-vegetale-mediteranee"/>
        <Hero businessName="Empreinte Végétale Méditeranée"/>
        <Presentation 
          businessName="Empreinte Végétale Méditeranée"
          profession="paysagiste"
          location="Nice"
        />
        <Features />
        <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <ServicesContact />
        <Footer 
          businessName="Empreinte Végétale Méditeranée"
          phoneNumber="+33 6 47 30 18 29"
          address="23 Av. Colombo, 06000 Nice"
        />
      </div>
    </main>
  );
}

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
        <Header businessName="PACA Paysage" businessHref="/paca-paysage"/>
        <Hero businessName="PACA Paysage"/>
        <Presentation 
          businessName="PACA Paysage"
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
          businessName="PACA Paysage"
          phoneNumber="+33 4 97 22 20 90"
          address="265 Rte du Pont de la Manda, 06640 Saint-Jeannet"
        />
      </div>
    </main>
  );
}

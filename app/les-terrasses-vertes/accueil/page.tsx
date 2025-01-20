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
        <Header businessName="Les Terrasses Vertes" businessHref="/les-terrasses-vertes"/>
        <Hero businessName="Les Terrasses Vertes"/>
        <Presentation 
          businessName="Les Terrasses Vertes"
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
          businessName="Les Terrasses Vertes"
          phoneNumber="+33 7 50 03 59 11"
          address="27 Chem. de Terron, 06200 Nice"
        />
      </div>
    </main>
  );
}

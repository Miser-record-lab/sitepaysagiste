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
        <Header businessName="Lobry Paysagiste" businessHref="/lobry-paysagiste"/>
        <Hero businessName="Lobry Paysagiste"/>
        <Presentation 
          businessName="Lobry Paysagiste"
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
          businessName="Lobry Paysagiste"
          phoneNumber="+33 6 19 78 82 34"
          address="253 de contournement du, Bd du Mercantour, 06200 Nice"
        />
      </div>
    </main>
  );
}

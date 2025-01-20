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
        <Header businessName="Les Jardins de Saint Jean" businessHref="/les-jardins-de-saint-jean"/>
        <Hero businessName="Les Jardins de Saint Jean"/>
        <Presentation 
          businessName="Les Jardins de Saint Jean"
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
          businessName="Les Jardins de Saint Jean"
          phoneNumber="+33 6 37 14 28 20"
          address="15 Av. Lympia, 06300 Nice"
        />
      </div>
    </main>
  );
}

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
        <Header businessName="Pensée Jardin" businessHref="/pensee-jardin"/>
        <Hero businessName="Pensée Jardin"/>
        <Presentation 
          businessName="Pensée Jardin"
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
          businessName="Pensée Jardin"
          phoneNumber="+33 6 85 81 60 94"
          address="22 Rue Barla, 06300 Nice"
        />
      </div>
    </main>
  );
}

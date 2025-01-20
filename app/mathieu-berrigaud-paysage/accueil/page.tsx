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
        <Header businessName="Mathieu Berrigaud Paysage" businessHref="/mathieu-berrigaud-paysage"/>
        <Hero businessName="Mathieu Berrigaud Paysage"/>
        <Presentation 
          businessName="Mathieu Berrigaud Paysage"
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
          businessName="Mathieu Berrigaud Paysage"
          phoneNumber="+33 6 50 52 68 05"
          address=""
        />
      </div>
    </main>
  );
}

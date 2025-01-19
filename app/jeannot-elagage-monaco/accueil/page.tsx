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
        <Header businessName="Jeannot élagage monaco" businessHref="/jeannot-elagage-monaco"/>
        <Hero businessName="Jeannot élagage monaco"/>
        <Presentation 
          businessName="Jeannot élagage monaco"
          profession="paysagiste"
          location="Monaco"
        />
        <Features />
        <Location 
          cities={['Monaco', 'Beausoleil', 'Cap-d\'Ail', 'La Turbie', 'Roquebrune-Cap-Martin', 'Menton', 'Èze', 'Saint-Jean-Cap-Ferrat', 'Villefranche-sur-Mer', 'Nice']} 
          introText="Nous couvrons Monaco et ses environs prestigieux" 
        />
        <ServicesContact />
        <Footer 
          businessName="Jeannot élagage monaco"
          phoneNumber="+33 6 28 84 83 94"
          address=""
        />
      </div>
    </main>
  );
}

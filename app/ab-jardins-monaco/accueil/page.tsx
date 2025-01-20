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
        <Header businessName="Ab Jardins Monaco" businessHref="/ab-jardins-monaco"/>
        <Hero businessName="Ab Jardins Monaco"/>
        <Presentation 
          businessName="Ab Jardins Monaco"
          profession="paysagiste"
          location="Monaco"
        />
        <Features />
        <Location 
          cities={['Monte-Carlo', 'La Condamine', 'Fontvieille', 'Moneghetti', 'Larvotto', 'Jardin Exotique', 'Monaco-Ville', 'Saint-Roman', 'Le Port Hercule', 'Spélugues']} 
          introText="Nous couvrons Monaco et ses quartiers prestigieux" 
        />
        <ServicesContact />
        <Footer 
          businessName="Ab Jardins Monaco"
          phoneNumber="+33 4 93 64 63 19"
          address="Le Patio Palace, 41 Av. Hector Otto, 98000 Monaco"
        />
      </div>
    </main>
  );
}

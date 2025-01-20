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
        <Header businessName="Monaco Aménagement Paysager" businessHref="/monaco-amenagement-paysager"/>
        <Hero businessName="Monaco Aménagement Paysager"/>
        <Presentation 
          businessName="Monaco Aménagement Paysager"
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
          businessName="Monaco Aménagement Paysager"
          phoneNumber="+33 6 29 65 69 62"
          address=""
        />
      </div>
    </main>
  );
}

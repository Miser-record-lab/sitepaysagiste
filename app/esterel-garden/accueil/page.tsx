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
        <Header businessName="Esterel Garden" businessHref="/esterel-garden"/>
        <Hero businessName="Esterel Garden"/>
        <Presentation 
          businessName="Esterel Garden"
          profession="paysagiste"
          location="Mougins"
        />
        <Features />
        <Location 
          cities={['Mougins', 'Antibes', 'Valbonne', 'Grasse', 'Mandelieu', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mougins, Cannes & Antibes" 
        />
        <ServicesContact />
        <Footer 
          businessName="Esterel Garden"
          phoneNumber="+33 6 68 22 13 03"
          address=""
        />
      </div>
    </main>
  );
}

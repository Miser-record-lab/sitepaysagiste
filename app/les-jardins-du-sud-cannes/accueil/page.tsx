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
        <Header businessName="Les Jardins du Sud Cannes" businessHref="/les-jardins-du-sud-cannes"/>
        <Hero businessName="Les Jardins du Sud Cannes"/>
        <Presentation 
          businessName="Les Jardins du Sud Cannes"
          profession="paysagiste"
          location="Cannes"
        />
        <Features />
        <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
        <ServicesContact />
        <Footer 
          businessName="Les Jardins du Sud Cannes"
          phoneNumber="+33 6 10 11 11 16"
          address=""
        />
      </div>
    </main>
  );
}

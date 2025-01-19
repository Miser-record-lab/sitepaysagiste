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
        <Header businessName="Les Jardins d'Hadrien" businessHref="/les-jardins-d-hadrien"/>
        <Hero businessName="Les Jardins d'Hadrien"/>
        <Presentation 
          businessName="Les Jardins d'Hadrien"
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
          businessName="Les Jardins d'Hadrien"
          phoneNumber="+33 6 10 36 62 82"
          address="46 Av. Saint-Jean"
        />
      </div>
    </main>
  );
}

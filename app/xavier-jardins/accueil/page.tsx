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
        <Header businessName="Xavier Jardins" businessHref="/xavier-jardins"/>
        <Hero businessName="Xavier Jardins"/>
        <Presentation 
          businessName="Xavier Jardins"
          profession="jardinier"
          location="Caussols"
        />
        <Features />
        <Location 
          cities={['Caussols', 'Mandelieu', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Caussols, Grasse & Cannes" 
        />
        <ServicesContact />
        <Footer 
          businessName="Xavier Jardins"
          phoneNumber="+33 6 64 35 44 01"
          address="Voie Romaine, 06460, Caussols"
        />
      </div>
    </main>
  );
}

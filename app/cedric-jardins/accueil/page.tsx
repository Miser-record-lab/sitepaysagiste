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
        <Header businessName="Cédric Jardins" businessHref="/cedric-jardins"/>
        <Hero businessName="Cédric Jardins"/>
        <Presentation 
          businessName="Cédric Jardins"
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
          businessName="Cédric Jardins"
          phoneNumber="+33 6 67 17 90 63"
          address="12 Chem. de la Merlette"
        />
      </div>
    </main>
  );
}

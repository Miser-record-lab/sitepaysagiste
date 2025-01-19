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
        <Header businessName="Derrick Garden" businessHref="/derrick-garden"/>
        <Hero businessName="Derrick Garden"/>
        <Presentation 
          businessName="Derrick Garden"
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
          businessName="Derrick Garden"
          phoneNumber="+33 6 13 10 57 07"
          address="2 Rue Philibert Delorme"
        />
      </div>
    </main>
  );
}

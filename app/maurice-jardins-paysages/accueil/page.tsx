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
        <Header businessName="Maurice Jardins Paysages" businessHref="/maurice-jardins-paysages"/>
        <Hero businessName="Maurice Jardins Paysages"/>
        <Presentation 
          businessName="Maurice Jardins Paysages"
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
          businessName="Maurice Jardins Paysages"
          phoneNumber="+33 4 93 43 60 57"
          address="75 Av. Maréchal Juin"
        />
      </div>
    </main>
  );
}

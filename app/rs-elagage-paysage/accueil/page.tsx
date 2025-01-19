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
        <Header businessName="RS Elagage & Paysage" businessHref="/rs-elagage-paysage"/>
        <Hero businessName="RS Elagage & Paysage"/>
        <Presentation 
          businessName="RS Elagage & Paysage"
          profession="jardinier"
          location="Grasse"
        />
        <Features />
        <Location 
          cities={['Grasse', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Grasse, Cannes & Mandelieu" 
        />
        <ServicesContact />
        <Footer 
          businessName="RS Elagage & Paysage"
          phoneNumber="+33 6 19 06 01 82"
          address="160 Rte de Cannes, 06130 Grasse"
        />
      </div>
    </main>
  );
}

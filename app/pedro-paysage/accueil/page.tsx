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
        <Header businessName="Pedro Paysage" businessHref="/pedro-paysage"/>
        <Hero businessName="Pedro Paysage"/>
        <Presentation 
          businessName="Pedro Paysage"
          profession="paysagiste"
          location="Pégomas"
        />
        <Features />
        <Location 
          cities={['Pégomas', 'Mandelieu', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Pégomas, Mandelieu & Cannes" 
        />
        <ServicesContact />
        <Footer 
          businessName="Edouard Jardins"
          phoneNumber="+33 6 35 11 14 98"
          address="81 Chem. de la Font des Muls, 06580 Pégomas"
        />
      </div>
    </main>
  );
}

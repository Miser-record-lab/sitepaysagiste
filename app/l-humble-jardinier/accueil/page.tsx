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
        <Header businessName="l'Humble Jardinier" businessHref="/l-humble-jardinier"/>
        <Hero businessName="l'Humble Jardinier"/>
        <Presentation 
          businessName="l'Humble Jardinier"
          profession="paysagiste"
          location="Valbonne"
        />
        <Features />
        <Location 
          cities={['Valbonne', 'Antibes', 'Mougins', 'Grasse', 'Mandelieu', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Valbonne, Cannes & Antibes" 
        />
        <ServicesContact />
        <Footer 
          businessName="l'Humble Jardinier"
          phoneNumber="+33 6 14 98 29 41"
          address=""
        />
      </div>
    </main>
  );
}

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
        <Header businessName="Sargiotto Didier" businessHref="/sargiotto-didier"/>
        <Hero businessName="Sargiotto Didier"/>
        <Presentation 
          businessName="Sargiotto Didier"
          profession="paysagiste"
          location="Mougins"
        />
        <Features />
        <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mougins, Cannes & Mandelieu" 
        />
        <ServicesContact />
        <Footer 
          businessName="Sargiotto Didier"
          phoneNumber="+33 6 21 54 21 28"
          address="993 Bd de la Corniche, 06250 Mougins"
        />
      </div>
    </main>
  );
}

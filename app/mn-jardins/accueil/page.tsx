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
        <Header businessName="MN Jardins" businessHref="/mn-jardins"/>
        <Hero businessName="MN Jardins"/>
        <Presentation 
          businessName="MN Jardins"
          profession="paysagiste"
          location="Mouans-Sartoux"
        />
        <Features />
        <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mouans-Sartoux, Mougins & Grasse" 
        />
        <ServicesContact />
        <Footer 
          businessName="MN Jardins"
          phoneNumber="+33 6 28 98 82 24"
          address="105 Chem. des Pilons, 06370 Mouans-Sartoux"
        />
      </div>
    </main>
  );
}

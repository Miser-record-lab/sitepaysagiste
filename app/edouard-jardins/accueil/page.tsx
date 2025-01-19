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
        <Header businessName="Edouard Jardins" businessHref="/edouard-jardins"/>
        <Hero businessName="Edouard Jardins"/>
        <Presentation 
          businessName="Edouard Jardins"
          profession="paysagiste"
          location="Pégomas"
        />
        <Features />
        <Location 
          cities={['Opio', 'Mandelieu', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Valbonne, Grasse & Cannes" 
        />
        <ServicesContact />
        <Footer 
          businessName="Edouard Jardins"
          phoneNumber="+33 7 68 90 98 76"
          address=""
        />
      </div>
    </main>
  );
}

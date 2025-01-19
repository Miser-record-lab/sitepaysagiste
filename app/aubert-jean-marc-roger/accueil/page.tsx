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
        <Header businessName="Aubert Jean Marc Roger" businessHref="/aubert-jean-marc-roger"/>
        <Hero businessName="Aubert Jean Marc Roger"/>
        <Presentation 
          businessName="Aubert Jean Marc Roger"
          profession="paysagiste"
          location="Mandelieu"
        />
        <Features />
        <Location 
          cities={['Mandelieu', 'Antibes', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mandelieu, Cannes & Antibes" 
        />
        <ServicesContact />
        <Footer 
          businessName="Aubert Jean Marc Roger"
          phoneNumber="+33 4 93 93 00 23"
          address="391 Av. de Cannes, 06210 Mandelieu-la-Napoule"
        />
      </div>
    </main>
  );
}

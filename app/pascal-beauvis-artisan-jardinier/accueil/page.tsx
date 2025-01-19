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
        <Header businessName="Pascal Beauvis artisan jardinier" businessHref="/pascal-beauvis-artisan-jardinier"/>
        <Hero businessName="Pascal Beauvis artisan jardinier"/>
        <Presentation 
          businessName="Pascal Beauvis artisan jardinier"
          profession=""
          location="Mandelieu"
        />
        <Features />
        <Location 
          cities={['Mandelieu', 'Antibes', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mandelieu, Cannes & Antibes" 
        />
        <ServicesContact />
        <Footer 
          businessName="Pascal Beauvis artisan jardinier"
          phoneNumber="+33 6 82 44 90 84"
          address=""
        />
      </div>
    </main>
  );
}

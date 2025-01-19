import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Pascal Beauvis artisan jardinier" businessHref="/pascal-beauvis-artisan-jardinier"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 82 44 90 84"
        email="pascalbeauvisjardinier@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Mandelieu', 'Antibes', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mandelieu, Cannes & Antibes" 
        />
        <Footer 
          businessName="Pascal Beauvis artisan jardinier"
          phoneNumber="+33 6 82 44 90 84"
          address=""
        />
    </main>
  );
}

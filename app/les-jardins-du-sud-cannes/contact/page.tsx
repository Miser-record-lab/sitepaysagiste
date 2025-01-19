import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Les Jardins du Sud Cannes" businessHref="/les-jardins-du-sud-cannes"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 10 11 11 16"
        email="jardinsdusud@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Les Jardins du Sud Cannes"
          phoneNumber="+33 6 10 11 11 16"
          address=""
        />
    </main>
  );
}

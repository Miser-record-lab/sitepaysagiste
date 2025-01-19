import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="l'Humble Jardinier" businessHref="/l-humble-jardinier"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 14 98 29 41"
        email="lhumblejardinier@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Valbonne', 'Antibes', 'Mougins', 'Grasse', 'Mandelieu', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Valbonne, Cannes & Antibes" 
        />
        <Footer 
          businessName="l'Humble Jardinier"
          phoneNumber="+33 6 14 98 29 41"
          address=""
        />
    </main>
  );
}

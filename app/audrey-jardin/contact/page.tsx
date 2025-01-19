import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Audrey Jardin" businessHref="/audrey-jardin"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 93 45 72 55"
        email="audreyjardin@gmail.com"
        address="16 Av. du Grand Jas"
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Audrey Jardin"
          phoneNumber="+33 4 93 45 72 55"
          address="16 Av. du Grand Jas"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Xavier Jardins" businessHref="/xavier-jardins"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 64 35 44 01"
        email="xavierjardins@gmail.com"
        address="Voie Romaine, 06460, Caussols"
      />
      <ContactContact />
      <Location 
          cities={['Caussols', 'Mandelieu', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Caussols, Grasse & Cannes" 
        />
        <Footer 
          businessName="Xavier Jardins"
          phoneNumber="+33 6 64 35 44 01"
          address="Voie Romaine, 06460, Caussols"
        />
    </main>
  );
}

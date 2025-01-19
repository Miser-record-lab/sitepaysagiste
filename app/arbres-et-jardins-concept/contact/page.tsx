import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Arbres et jardins concept" businessHref="/arbres-et-jardins-concept"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 12 62 36 46"
        email="arbresetjardinsconcept@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
        <Footer 
          businessName="Arbres et jardins concept"
          phoneNumber="+33 6 12 62 36 46"
          address=""
        />
    </main>
  );
}

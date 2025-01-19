import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Deco Paysage Concept" businessHref="/deco-paysage-concept"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 22 95 70 20"
        email="decopaysageconcept@gmail.com"
        address="17 Bd de la Croisette"
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Deco Paysage Concept"
          phoneNumber="+33 6 22 95 70 20"
          address="17 Bd de la Croisette"
        />
    </main>
  );
}

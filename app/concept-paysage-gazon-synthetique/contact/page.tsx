import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Concept Paysage - Gazon Synthétique" businessHref="/concept-paysage-gazon-synthetique"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 62 76 99 46"
        email="conceptpaysagegrasse@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Grasse', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Grasse, Cannes & Mandelieu" 
        />
      <Footer 
          businessName="Concept Paysage - Gazon Synthétique"
          phoneNumber="+33 6 62 76 99 46"
          address="Av. Sidi Brahim, 06130 Grasse"
        />
    </main>
  );
}

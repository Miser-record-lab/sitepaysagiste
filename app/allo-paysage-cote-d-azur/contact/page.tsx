import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Allô paysage Côte d'Azur" businessHref="/allo-paysage-cote-d-azur" />
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 7 78 31 81 56"
        email="allopaysagecotedazur@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Allô paysage Côte d'Azur"
          phoneNumber="+33 7 78 31 81 56"
          address=""
        />
    </main>
  );
}

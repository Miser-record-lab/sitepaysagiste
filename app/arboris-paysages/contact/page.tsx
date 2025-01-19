import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Arboris Paysages Cannes" businessHref="/arboris-paysages"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 89 33 56 66"
        email="arborispaysages@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Arboris Paysages Cannes"
          phoneNumber="+33 6 89 33 56 66"
          address=""
        />
    </main>
  );
}

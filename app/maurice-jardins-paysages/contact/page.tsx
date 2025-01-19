import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Maurice Jardins Paysages" businessHref="/maurice-jardins-paysages"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 93 43 60 57"
        email="mauricejardinspaysages@gmail.com"
        address="75 Av. Maréchal Juin"
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Maurice Jardins Paysages"
          phoneNumber="+33 4 93 43 60 57"
          address="75 Av. Maréchal Juin"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="RS Elagage & Paysage" businessHref="/rs-elagage-paysage"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 19 06 01 82"
        email="rselagagepaysage@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Grasse', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Grasse, Cannes & Mandelieu" 
        />
        <Footer 
          businessName="RS Elagage & Paysage"
          phoneNumber="+33 6 19 06 01 82"
          address="160 Rte de Cannes, 06130 Grasse"
        />
    </main>
  );
}

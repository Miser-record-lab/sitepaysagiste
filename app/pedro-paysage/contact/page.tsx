import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Pedro Paysage" businessHref="/pedro-paysage"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 35 11 14 98"
        email="pedropaysage@gmail.com"
        address="81 Chem. de la Font des Muls, 06580 Pégomas"
      />
      <ContactContact />
      <Location 
          cities={['Pégomas', 'Mandelieu', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Pégomas, Mandelieu & Cannes" 
        />
      <Footer 
          businessName="Edouard Jardins"
          phoneNumber="+33 6 35 11 14 98"
          address="81 Chem. de la Font des Muls, 06580 Pégomas"
        />
    </main>
  );
}

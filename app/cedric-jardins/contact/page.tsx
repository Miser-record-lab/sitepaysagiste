import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Cédric Jardins" businessHref="/cedric-jardins"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 67 17 90 63"
        email="credricjardins@gmail.com"
        address="12 Chem. de la Merlette"
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Cédric Jardins"
          phoneNumber="+33 6 67 17 90 63"
          address="12 Chem. de la Merlette"
        />
    </main>
  );
}

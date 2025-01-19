import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Derrick Garden" businessHref="/derrick-garden"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 13 10 57 07"
        email="derrickgarden@gmail.com"
        address="2 Rue Philibert Delorme"
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Derrick Garden"
          phoneNumber="+33 6 13 10 57 07"
          address="2 Rue Philibert Delorme"
        />
    </main>
  );
}

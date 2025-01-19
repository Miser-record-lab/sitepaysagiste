import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Chartoire Garden" businessHref="/chartoire-garden"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 29 65 28 54"
        email="chartoiregarden@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
        <Footer 
          businessName="Chartoire Garden"
          phoneNumber="+33 6 29 65 28 54"
          address=""
        />
    </main>
  );
}

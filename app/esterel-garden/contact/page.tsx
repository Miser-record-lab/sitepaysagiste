import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Esterel Garden" businessHref="/esterel-garden"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 68 22 13 03"
        email="esterelgarden@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Mougins', 'Antibes', 'Valbonne', 'Grasse', 'Mandelieu', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mougins, Cannes & Antibes" 
        />
        <Footer 
          businessName="Esterel Garden"
          phoneNumber="+33 6 68 22 13 03"
          address=""
        />
    </main>
  );
}

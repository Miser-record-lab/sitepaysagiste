import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Gecko Paysage" businessHref="/gecko-paysage"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 68 80 13 31"
        email="geckopaysage@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Gecko Paysage"
          phoneNumber="+33 6 68 80 13 31"
          address=""
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="MN Jardins" businessHref="/mn-jardins"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 28 98 82 24"
        email="mnjardins@gmail.com"
        address="105 Chem. des Pilons, 06370 Mouans-Sartoux"
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mouans-Sartoux, Mougins & Grasse" 
        />
        <Footer 
          businessName="MN Jardins"
          phoneNumber="+33 6 28 98 82 24"
          address="105 Chem. des Pilons, 06370 Mouans-Sartoux"
        />
    </main>
  );
}

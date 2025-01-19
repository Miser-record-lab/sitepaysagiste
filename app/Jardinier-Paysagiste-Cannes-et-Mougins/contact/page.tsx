import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Jardinier Paysagiste Cannes et Mougins" businessHref="/Jardinier-Paysagiste-Cannes-et-Mougins"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 63 78 31 34"
        email="jardinierpaysagiste@gmail.com"
        address="22 Av. du Camp Long"
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Jardinier Paysagiste Cannes et Mougins"
          phoneNumber="+33 6 63 78 31 34"
          address="22 Av. du Camp Long"
        />
    </main>
  );
}

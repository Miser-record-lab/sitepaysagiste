import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="LB Jardins" businessHref="/lb-jardins"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 13 40 98 77"
        email="lbjardins@gmail.com"
        address="119 Bd Pasteur, 06000 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="LB Jardins"
          phoneNumber="+33 6 13 40 98 77"
          address="119 Bd Pasteur, 06000 Nice"
        />
    </main>
  );
}

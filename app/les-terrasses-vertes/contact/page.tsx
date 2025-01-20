import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="Les Terrasses Vertes" businessHref="/les-terrasses-vertes"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 7 50 03 59 11"
        email="lesterrassesvertes@gmail.com"
        address="27 Chem. de Terron, 06200 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Les Terrasses Vertes"
          phoneNumber="+33 7 50 03 59 11"
          address="27 Chem. de Terron, 06200 Nice"
        />
    </main>
  );
}

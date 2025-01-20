import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="Atelier Nelumbo" businessHref="/atelier-nelumbo"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 64 96 64 99"
        email="ateliernelumbo@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Atelier Nelumbo"
          phoneNumber="+33 6 64 96 64 99"
          address=""
        />
    </main>
  );
}

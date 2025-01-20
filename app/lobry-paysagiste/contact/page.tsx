import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Lobry Paysagiste" businessHref="/lobry-paysagiste"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 19 78 82 34"
        email="lobrypaysagiste@gmail.com"
        address="253 de contournement du, Bd du Mercantour, 06200 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Lobry Paysagiste"
          phoneNumber="+33 6 19 78 82 34"
          address="253 de contournement du, Bd du Mercantour, 06200 Nice"
        />
    </main>
  );
}

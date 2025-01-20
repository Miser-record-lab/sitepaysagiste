import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Laroche Jeremy" businessHref="/laroche-jeremy"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 89 00 18 57"
        email="larochejeremy@gmail.com"
        address="28 Av. Lorenzi, 06100 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Laroche Jeremy"
          phoneNumber="+33 4 89 00 18 57"
          address="28 Av. Lorenzi, 06100 Nice"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Allo Jardin" businessHref="/allo-jardin"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 93 54 84 66"
        email="allojardinnice@gmail.com"
        address="27 Bd de l'Ariane, 06300 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Allo Jardin"
          phoneNumber="+33 4 93 54 84 66"
          address="27 Bd de l'Ariane, 06300 Nice"
        />
    </main>
  );
}

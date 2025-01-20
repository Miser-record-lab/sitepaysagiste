import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Rex Gardener" businessHref="/rex-gardener"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 85 81 60 94"
        email="rexgardener@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Rex Gardener"
          phoneNumber="+33 6 79 76 52 41"
          address=""
        />
    </main>
  );
}

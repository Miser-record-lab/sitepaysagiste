import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="Mattera Pierre" businessHref="/mattera-pierre"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 09 09 71 46"
        email="matterapierre@gmail.com"
        address="12 Bd Comte de Falicon, 06100 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Mattera Pierre"
          phoneNumber="+33 6 09 09 71 46"
          address="12 Bd Comte de Falicon, 06100 Nice"
        />
    </main>
  );
}

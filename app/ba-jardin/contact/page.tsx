import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="BA Jardin" businessHref="/ba-jardin"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 95 60 29 95"
        email="bajardin@gmail.com"
        address="87 Av. George V, 06000 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="BA Jardin"
          phoneNumber="+33 6 95 60 29 95"
          address="87 Av. George V, 06000 Nice"
        />
    </main>
  );
}

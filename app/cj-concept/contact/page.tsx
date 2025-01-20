import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="CJ Concept" businessHref="/cj-concept"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 93 71 38 70"
        email="cjconcept@gmail.com"
        address="40 Av. Sainte-Marguerite, 06200 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="CJ Concept"
          phoneNumber="+33 4 93 71 38 70"
          address="40 Av. Sainte-Marguerite, 06200 Nice"
        />
    </main>
  );
}

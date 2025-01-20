import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="Raffestin Thierry" businessHref="/raffestin-thierry"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 34 58 62 66"
        email="raffestinthierry@gmail.com"
        address="51 Av. de l'Arbre Inférieur, 06000 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Raffestin Thierry"
          phoneNumber="+33 6 34 58 62 66"
          address="51 Av. de l'Arbre Inférieur, 06000 Nice"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="S.e.v.e Jardins" businessHref="/seve-jardins"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 93 83 15 50"
        email="sevejardins@gmail.com"
        address="48 Rue Rossini, 06000 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="S.e.v.e Jardins"
          phoneNumber="+33 4 93 83 15 50"
          address="48 Rue Rossini, 06000 Nice"
        />
    </main>
  );
}

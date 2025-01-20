import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Le Saux Gilles" businessHref="/le-saux-gilles"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 93 62 25 08"
        email="lesauxgilles@gmail.com"
        address="17 Rue Bavastro, 06300 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Le Saux Gilles"
          phoneNumber="+33 4 93 62 25 08"
          address="17 Rue Bavastro, 06300 Nice"
        />
    </main>
  );
}

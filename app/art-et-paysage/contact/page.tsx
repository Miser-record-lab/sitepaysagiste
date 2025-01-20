import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Art et Paysage" businessHref="/art-et-paysage"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 93 62 58 46"
        email="artetpaysage@gmail.com"
        address="30 Av. Jean Médecin, 06000 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Art et Paysage"
          phoneNumber="+33 4 93 62 58 46"
          address="30 Av. Jean Médecin, 06000 Nice"
        />
    </main>
  );
}

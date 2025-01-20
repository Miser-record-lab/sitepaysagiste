import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="PACA Paysage" businessHref="/paca-paysage"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 97 22 20 90"
        email="pacapaysage@gmail.com"
        address="265 Rte du Pont de la Manda, 06640 Saint-Jeannet"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="PACA Paysage"
          phoneNumber="+33 4 97 22 20 90"
          address="265 Rte du Pont de la Manda, 06640 Saint-Jeannet"
        />
    </main>
  );
}

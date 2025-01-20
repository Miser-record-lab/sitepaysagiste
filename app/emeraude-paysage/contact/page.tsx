import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Emeraude Paysage" businessHref="/emeraude-paysage"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 23 11 55 09"
        email="emeraudepaysage@gmail.com"
        address="9 Av. Cernuschi, 06100 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Emeraude Paysage"
          phoneNumber="+33 6 23 11 55 09"
          address="9 Av. Cernuschi, 06100 Nice"
        />
    </main>
  );
}

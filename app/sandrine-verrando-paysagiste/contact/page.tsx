import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="Sandrine Verrando Paysagiste" businessHref="/sandrine-verrando-paysagiste"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 27 21 20 22"
        email="sandrineverrando@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Sandrine Verrando Paysagiste"
          phoneNumber="+33 6 27 21 20 22"
          address=""
        />
    </main>
  );
}

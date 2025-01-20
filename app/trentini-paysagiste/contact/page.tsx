import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Trentini Paysagiste" businessHref="/trentini-paysagiste"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 7 56 83 89 56"
        email="trentinipaysagiste@gmail.com"
        address="433 Chem. de Saquier, 06200 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Trentini Paysagiste"
          phoneNumber="+33 7 56 83 89 56"
          address="433 Chem. de Saquier, 06200 Nice"
        />
    </main>
  );
}

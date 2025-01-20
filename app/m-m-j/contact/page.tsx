import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="M.M.J" businessHref="/m-m-j"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 26 57 04 48"
        email="mmj@gmail.com"
        address="164 Chem. du Cal de Spagnol-Soubran, 06200 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="M.M.J"
          phoneNumber="+33 6 26 57 04 48"
          address="164 Chem. du Cal de Spagnol-Soubran, 06200 Nice"
        />
    </main>
  );
}

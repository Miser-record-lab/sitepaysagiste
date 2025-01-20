import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Mathieu Berrigaud Paysage" businessHref="/mathieu-berrigaud-paysage"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 50 52 68 05"
        email="mathieuberrigaud@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Mathieu Berrigaud Paysage"
          phoneNumber="+33 6 50 52 68 05"
          address=""
        />
    </main>
  );
}

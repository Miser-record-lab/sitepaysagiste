import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Jardin Nature" businessHref="/jardin-nature"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 92 09 90 80"
        email="jardinnaturenice@gmail.com"
        address="122 Cor des Oliviers, 06000 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Jardin Nature"
          phoneNumber="+33 4 92 09 90 80"
          address="122 Cor des Oliviers, 06000 Nice"
        />
    </main>
  );
}

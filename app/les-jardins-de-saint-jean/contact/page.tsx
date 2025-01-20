import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";

export default function Contact() {
  return (
    <main>
      <Header businessName="Les Jardins de Saint Jean" businessHref="/les-jardins-de-saint-jean"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 37 14 28 20"
        email="lesjardinsdesaintjean@gmail.com"
        address="15 Av. Lympia, 06300 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Les Jardins de Saint Jean"
          phoneNumber="+33 6 37 14 28 20"
          address="15 Av. Lympia, 06300 Nice"
        />
    </main>
  );
}

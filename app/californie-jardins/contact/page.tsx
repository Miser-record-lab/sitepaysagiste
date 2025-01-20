import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Californie Jardins" businessHref="/californie-jardins"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 93 18 05 78"
        email="californiejardins@gmail.com"
        address="166 Av. Sainte-Marguerite, 06200 Nice"
      />
      <ContactContact />
      <Location 
          cities={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer', 'Cap-d\'Ail', 'Èze', 'La Trinité', 'Contes', 'Menton']} 
          introText="Nous couvrons Nice, Saint-Laurent-du-Var & Cagnes-sur-Mer" 
        />
        <Footer 
          businessName="Californie Jardins"
          phoneNumber="+33 4 93 18 05 78"
          address="166 Av. Sainte-Marguerite, 06200 Nice"
        />
    </main>
  );
}

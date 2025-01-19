import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Jeannot élagage monaco" businessHref="/jeannot-elagage-monaco"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 28 84 83 94"
        email="jeannotelagagemonaco@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Monaco', 'Beausoleil', 'Cap-d\'Ail', 'La Turbie', 'Roquebrune-Cap-Martin', 'Menton', 'Èze', 'Saint-Jean-Cap-Ferrat', 'Villefranche-sur-Mer', 'Nice']} 
          introText="Nous couvrons Monaco et ses environs prestigieux" 
        />
        <Footer 
          businessName="Jeannot élagage monaco"
          phoneNumber="+33 6 28 84 83 94"
          address=""
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Ab Jardins Monaco" businessHref="/ab-jardins-monaco"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 4 93 64 63 19"
        email="abjardinsmonaco@gmail.com"
        address="Le Patio Palace, 41 Av. Hector Otto, 98000 Monaco"
      />
      <ContactContact />
      <Location 
        cities={['Monte-Carlo', 'La Condamine', 'Fontvieille', 'Moneghetti', 'Larvotto', 'Jardin Exotique', 'Monaco-Ville', 'Saint-Roman', 'Le Port Hercule', 'Spélugues']} 
        introText="Nous couvrons Monaco et ses quartiers prestigieux" 
      />
        <Footer 
          businessName="Ab Jardins Monaco"
          phoneNumber="+33 4 93 64 63 19"
          address="Le Patio Palace, 41 Av. Hector Otto, 98000 Monaco"
        />
    </main>
  );
}

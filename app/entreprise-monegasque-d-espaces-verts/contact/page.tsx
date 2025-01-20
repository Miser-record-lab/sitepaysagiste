import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Entreprise Monégasque d'Espaces Verts" businessHref="/entreprise-monegasque-d-espaces-verts"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+377 93 30 18 34"
        email="espacesvertsmonaco@gmail.com"
        address="38 Bd du Jardin Exotique, 98000 Monaco"
      />
      <ContactContact />
      <Location 
        cities={['Monte-Carlo', 'La Condamine', 'Fontvieille', 'Moneghetti', 'Larvotto', 'Jardin Exotique', 'Monaco-Ville', 'Saint-Roman', 'Le Port Hercule', 'Spélugues']} 
        introText="Nous couvrons Monaco et ses quartiers prestigieux" 
      />
        <Footer 
          businessName="Entreprise Monégasque d'Espaces Verts"
          phoneNumber="+377 93 30 18 34"
          address="38 Bd du Jardin Exotique, 98000 Monaco"
        />
    </main>
  );
}

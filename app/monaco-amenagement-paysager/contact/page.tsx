import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Monaco Aménagement Paysager" businessHref="/monaco-amenagement-paysager"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 29 65 69 62"
        email="monacoamenagementpaysager@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
        cities={['Monte-Carlo', 'La Condamine', 'Fontvieille', 'Moneghetti', 'Larvotto', 'Jardin Exotique', 'Monaco-Ville', 'Saint-Roman', 'Le Port Hercule', 'Spélugues']} 
        introText="Nous couvrons Monaco et ses quartiers prestigieux" 
      />
        <Footer 
          businessName="Monaco Aménagement Paysager"
          phoneNumber="+33 6 29 65 69 62"
          address=""
        />
    </main>
  );
}

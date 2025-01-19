import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Edouard Jardins" businessHref="/edouard-jardins"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 7 68 90 98 76"
        email="edouardjardins@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Opio', 'Mandelieu', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Valbonne, Grasse & Cannes" 
        />
        <Footer 
          businessName="Edouard Jardins"
          phoneNumber="+33 7 68 90 98 76"
          address=""
        />
    </main>
  );
}

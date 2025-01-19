import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Les Jardins d'Hadrien" businessHref="/les-jardins-d-hadrien"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 10 36 62 82"
        email="credricjardins@gmail.com"
        address="46 Av. Saint-Jean"
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Cannes, Antibes & Mandelieu" 
        />
      <Footer 
          businessName="Les Jardins d'Hadrien"
          phoneNumber="+33 6 10 36 62 82"
          address="46 Av. Saint-Jean"
        />
    </main>
  );
}

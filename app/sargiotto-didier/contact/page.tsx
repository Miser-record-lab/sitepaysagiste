import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Sargiotto Didier" businessHref="/sargiotto-didier"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 21 54 21 28"
        email="sargiottodidier@gmail.com"
        address="993 Bd de la Corniche, 06250 Mougins"
      />
      <ContactContact />
      <Location 
          cities={['Cannes', 'Antibes', 'Valbonne', 'Mandelieu', 'Mougins', 'Le Cannet', 'Grasse', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mougins, Cannes & Mandelieu" 
        />
        <Footer 
          businessName="Sargiotto Didier"
          phoneNumber="+33 6 21 54 21 28"
          address="993 Bd de la Corniche, 06250 Mougins"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header businessName="Aubert Jean Marc Roger" businessHref="/aubert-jean-marc-roger"/>
      <ContactHero />
      <ContactPhone 
        phoneNumber="+33 6 62 76 99 46"
        email="aubertjeanmarcroger@gmail.com"
        address=""
      />
      <ContactContact />
      <Location 
          cities={['Mandelieu', 'Antibes', 'Valbonne', 'Grasse', 'Mougins', 'Le Cannet', 'Cannes', 'Vallauris', 'Biot', 'Théoule-sur-Mer']} 
          introText="Nous couvrons Mandelieu, Cannes & Antibes" 
        />
      <Footer 
          businessName="Aubert Jean Marc Roger"
          phoneNumber="+33 4 93 93 00 23"
          address="391 Av. de Cannes, 06210 Mandelieu-la-Napoule"
        />
    </main>
  );
}

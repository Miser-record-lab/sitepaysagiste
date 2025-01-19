import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Aubert Jean Marc Roger" businessHref="/aubert-jean-marc-roger"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Aubert Jean Marc Roger"
          phoneNumber="+33 4 93 93 00 23"
          address="391 Av. de Cannes, 06210 Mandelieu-la-Napoule"
        />
    </main>
  );
}

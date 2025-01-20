import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Jardins de Valmont" businessHref="/jardins-de-valmont"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Jardins de Valmont"
          phoneNumber="+33 4 93 52 23 20"
          address="120 Av. de Gairaut, 06000 Nice"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Empreinte Végétale Méditeranée" businessHref="/empreinte-vegetale-mediteranee"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Empreinte Végétale Méditeranée"
          phoneNumber="+33 6 47 30 18 29"
          address="23 Av. Colombo, 06000 Nice"
        />
    </main>
  );
}

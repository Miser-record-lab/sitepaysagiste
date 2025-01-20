import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="Naturatec Jardin" businessHref="/naturatec-jardin"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Naturatec Jardin"
          phoneNumber="+33 6 23 32 80 69"
          address="90 Bd de Cessole, 06100 Nice"
        />
    </main>
  );
}

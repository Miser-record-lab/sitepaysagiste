import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="Racines au Carré" businessHref="/racines-au-carre"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Racines au Carré"
          phoneNumber="+33 6 69 96 04 49"
          address=""
        />
    </main>
  );
}

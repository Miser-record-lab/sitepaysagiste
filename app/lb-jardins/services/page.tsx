import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="LB Jardins" businessHref="/lb-jardins"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="LB Jardins"
          phoneNumber="+33 6 13 40 98 77"
          address="119 Bd Pasteur, 06000 Nice"
        />
    </main>
  );
}

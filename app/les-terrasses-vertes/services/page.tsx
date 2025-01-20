import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="Les Terrasses Vertes" businessHref="/les-terrasses-vertes"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Les Terrasses Vertes"
          phoneNumber="+33 7 50 03 59 11"
          address="27 Chem. de Terron, 06200 Nice"
        />
    </main>
  );
}

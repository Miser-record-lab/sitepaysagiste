import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="CJ Concept" businessHref="/cj-concept"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="CJ Concept"
          phoneNumber="+33 4 93 71 38 70"
          address="40 Av. Sainte-Marguerite, 06200 Nice"
        />
    </main>
  );
}

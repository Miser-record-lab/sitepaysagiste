import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="S.e.v.e Jardins" businessHref="/seve-jardins"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="S.e.v.e Jardins"
          phoneNumber="+33 4 93 83 15 50"
          address="48 Rue Rossini, 06000 Nice"
        />
    </main>
  );
}

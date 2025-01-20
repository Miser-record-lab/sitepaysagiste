import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="Les Jardins de Saint Jean" businessHref="/les-jardins-de-saint-jean"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Les Jardins de Saint Jean"
          phoneNumber="+33 6 37 14 28 20"
          address="15 Av. Lympia, 06300 Nice"
        />
    </main>
  );
}

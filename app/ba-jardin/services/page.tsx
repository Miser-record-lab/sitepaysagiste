import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="BA Jardin" businessHref="/ba-jardin"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="BA Jardin"
          phoneNumber="+33 6 95 60 29 95"
          address="87 Av. George V, 06000 Nice"
        />
    </main>
  );
}

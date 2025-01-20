import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Pensée Jardin" businessHref="/pensee-jardin"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Pensée Jardin"
          phoneNumber="+33 6 85 81 60 94"
          address="22 Rue Barla, 06300 Nice"
        />
    </main>
  );
}

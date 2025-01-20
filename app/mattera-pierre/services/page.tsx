import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="Mattera Pierre" businessHref="/mattera-pierre"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Mattera Pierre"
          phoneNumber="+33 6 09 09 71 46"
          address="12 Bd Comte de Falicon, 06100 Nice"
        />
    </main>
  );
}

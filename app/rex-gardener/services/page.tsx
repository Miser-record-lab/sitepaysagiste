import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Rex Gardener" businessHref="/rex-gardener"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Rex Gardener"
          phoneNumber="+33 6 79 76 52 41"
          address=""
        />
    </main>
  );
}

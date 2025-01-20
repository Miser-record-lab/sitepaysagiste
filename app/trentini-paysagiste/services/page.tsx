import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Trentini Paysagiste" businessHref="/trentini-paysagiste"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Trentini Paysagiste"
          phoneNumber="+33 7 56 83 89 56"
          address="433 Chem. de Saquier, 06200 Nice"
        />
    </main>
  );
}

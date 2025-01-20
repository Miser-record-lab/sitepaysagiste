import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Emeraude Paysage" businessHref="/emeraude-paysage"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Emeraude Paysage"
          phoneNumber="+33 6 23 11 55 09"
          address="9 Av. Cernuschi, 06100 Nice"
        />
    </main>
  );
}

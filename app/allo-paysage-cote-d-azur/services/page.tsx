import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Allô paysage Côte d'Azur" businessHref="/allo-paysage-cote-d-azur"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Allô paysage Côte d'Azur"
          phoneNumber="+33 7 78 31 81 56"
          address=""
        />
    </main>
  );
}

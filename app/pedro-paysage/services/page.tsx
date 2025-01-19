import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Pedro Paysage" businessHref="/pedro-paysage"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Edouard Jardins"
          phoneNumber="+33 6 35 11 14 98"
          address="81 Chem. de la Font des Muls, 06580 Pégomas"
        />
    </main>
  );
}

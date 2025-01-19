import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Concept Paysage - Gazon Synthétique" businessHref="/concept-paysage-gazon-synthetique"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Concept Paysage - Gazon Synthétique"
          phoneNumber="+33 6 62 76 99 46"
          address="Av. Sidi Brahim, 06130 Grasse"
        />
    </main>
  );
}

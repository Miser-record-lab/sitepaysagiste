import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Deco Paysage Concept" businessHref="/deco-paysage-concept"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Deco Paysage Concept"
          phoneNumber="+33 6 22 95 70 20"
          address="17 Bd de la Croisette"
        />
    </main>
  );
}

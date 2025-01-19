import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="RS Elagage & Paysage" businessHref="/rs-elagage-paysage"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="RS Elagage & Paysage"
          phoneNumber="+33 6 19 06 01 82"
          address="160 Rte de Cannes, 06130 Grasse"
        />
    </main>
  );
}

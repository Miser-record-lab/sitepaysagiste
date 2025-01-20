import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="PACA Paysage" businessHref="/paca-paysage"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="PACA Paysage"
          phoneNumber="+33 4 97 22 20 90"
          address="265 Rte du Pont de la Manda, 06640 Saint-Jeannet"
        />
    </main>
  );
}

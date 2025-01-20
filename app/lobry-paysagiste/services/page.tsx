import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Lobry Paysagiste" businessHref="/lobry-paysagiste"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Lobry Paysagiste"
          phoneNumber="+33 6 19 78 82 34"
          address="253 de contournement du, Bd du Mercantour, 06200 Nice"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Jardin Nature" businessHref="/jardin-nature"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Jardin Nature"
          phoneNumber="+33 4 92 09 90 80"
          address="122 Cor des Oliviers, 06000 Nice"
        />
    </main>
  );
}

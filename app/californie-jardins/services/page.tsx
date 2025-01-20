import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Californie Jardins" businessHref="/californie-jardins"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Californie Jardins"
          phoneNumber="+33 4 93 18 05 78"
          address="166 Av. Sainte-Marguerite, 06200 Nice"
        />
    </main>
  );
}

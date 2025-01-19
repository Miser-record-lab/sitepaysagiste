import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Xavier Jardins" businessHref="/xavier-jardins"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Xavier Jardins"
          phoneNumber="+33 6 64 35 44 01"
          address="Voie Romaine, 06460, Caussols"
        />
    </main>
  );
}

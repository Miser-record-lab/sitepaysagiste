import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="Raffestin Thierry" businessHref="/raffestin-thierry"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Raffestin Thierry"
          phoneNumber="+33 6 34 58 62 66"
          address="51 Av. de l'Arbre Inférieur, 06000 Nice"
        />
    </main>
  );
}

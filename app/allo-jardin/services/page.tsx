import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Allo Jardin" businessHref="/allo-jardin"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Allo Jardin"
          phoneNumber="+33 4 93 54 84 66"
          address="27 Bd de l'Ariane, 06300 Nice"
        />
    </main>
  );
}

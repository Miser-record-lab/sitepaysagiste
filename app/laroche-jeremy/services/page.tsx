import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Laroche Jeremy" businessHref="/laroche-jeremy"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Laroche Jeremy"
          phoneNumber="+33 4 89 00 18 57"
          address="28 Av. Lorenzi, 06100 Nice"
        />
    </main>
  );
}

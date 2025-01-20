import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Le Saux Gilles" businessHref="/le-saux-gilles"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Le Saux Gilles"
          phoneNumber="+33 4 93 62 25 08"
          address="17 Rue Bavastro, 06300 Nice"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Art et Paysage" businessHref="/art-et-paysage"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Art et Paysage"
          phoneNumber="+33 4 93 62 58 46"
          address="30 Av. Jean Médecin, 06000 Nice"
        />
    </main>
  );
}

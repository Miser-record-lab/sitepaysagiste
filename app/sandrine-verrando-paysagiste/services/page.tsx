import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";

export default function Services() {
  return (
    <main>
      <Header businessName="Sandrine Verrando Paysagiste" businessHref="/sandrine-verrando-paysagiste"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Sandrine Verrando Paysagiste"
          phoneNumber="+33 6 27 21 20 22"
          address=""
        />
    </main>
  );
}

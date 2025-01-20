import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Ab Jardins Monaco" businessHref="/ab-jardins-monaco"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Ab Jardins Monaco"
          phoneNumber="+33 4 93 64 63 19"
          address="Le Patio Palace, 41 Av. Hector Otto, 98000 Monaco"
        />
    </main>
  );
}

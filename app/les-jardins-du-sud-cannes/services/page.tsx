import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Les Jardins du Sud Cannes" businessHref="/les-jardins-du-sud-cannes"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Les Jardins du Sud Cannes"
          phoneNumber="+33 6 10 11 11 16"
          address=""
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Pascal Beauvis artisan jardinier" businessHref="/pascal-beauvis-artisan-jardinier"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Pascal Beauvis artisan jardinier"
          phoneNumber="+33 6 82 44 90 84"
          address=""
        />
    </main>
  );
}

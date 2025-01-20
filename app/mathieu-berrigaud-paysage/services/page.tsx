import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Mathieu Berrigaud Paysage" businessHref="/mathieu-berrigaud-paysage"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Mathieu Berrigaud Paysage"
          phoneNumber="+33 6 50 52 68 05"
          address=""
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Monaco Aménagement Paysager" businessHref="/monaco-amenagement-paysager"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Monaco Aménagement Paysager"
          phoneNumber="+33 6 29 65 69 62"
          address=""
        />
    </main>
  );
}

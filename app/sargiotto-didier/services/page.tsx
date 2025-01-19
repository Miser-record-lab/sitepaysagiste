import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Sargiotto Didier" businessHref="/sargiotto-didier"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Sargiotto Didier"
          phoneNumber="+33 6 21 54 21 28"
          address="993 Bd de la Corniche, 06250 Mougins"
        />
    </main>
  );
}

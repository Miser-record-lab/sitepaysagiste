import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="M.M.J" businessHref="/m-m-j"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="M.M.J"
          phoneNumber="+33 6 26 57 04 48"
          address="164 Chem. du Cal de Spagnol-Soubran, 06200 Nice"
        />
    </main>
  );
}

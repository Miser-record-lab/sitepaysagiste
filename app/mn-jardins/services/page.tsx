import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="MN Jardins" businessHref="/mn-jardins"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="MN Jardins"
          phoneNumber="+33 6 28 98 82 24"
          address="105 Chem. des Pilons, 06370 Mouans-Sartoux"
        />
    </main>
  );
}

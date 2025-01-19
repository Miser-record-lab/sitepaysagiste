import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Jardinier Paysagiste Cannes et Mougins" businessHref="/Jardinier-Paysagiste-Cannes-et-Mougins"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Jardinier Paysagiste Cannes et Mougins"
          phoneNumber="+33 6 63 78 31 34"
          address="22 Av. du Camp Long"
        />
    </main>
  );
}

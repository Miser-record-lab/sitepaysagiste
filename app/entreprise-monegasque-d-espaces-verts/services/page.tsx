import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesPrices from "@/components/ServicesPrices";
import ServicesContact from "@/components/ServicesContact";



export default function Services() {
  return (
    <main>
      <Header businessName="Entreprise Monégasque d'Espaces Verts" businessHref="/entreprise-monegasque-d-espaces-verts"/>
      <ServicesHero />
      <ServicesList />
      <ServicesPrices />
      <ServicesContact />
      <Footer 
          businessName="Entreprise Monégasque d'Espaces Verts"
          phoneNumber="+377 93 30 18 34"
          address="38 Bd du Jardin Exotique, 98000 Monaco"
        />
    </main>
  );
}

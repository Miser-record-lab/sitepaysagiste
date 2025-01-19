import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Les Jardins d'Hadrien" businessHref="/les-jardins-d-hadrien"/>
      <AboutHero businessName="des Jardins d'Hadrien"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Les Jardins d'Hadrien"
          phoneNumber="+33 6 10 36 62 82"
          address="46 Av. Saint-Jean"
        />
    </main>
  );
}

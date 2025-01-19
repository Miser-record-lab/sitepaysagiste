import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Allô paysage Côte d'Azur" businessHref="/allo-paysage-cote-d-azur" />
      <AboutHero businessName="d'Allô paysage Côte d'Azur"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Allô paysage Côte d'Azur"
          phoneNumber="+33 7 78 31 81 56"
          address=""
        />
    </main>
  );
}

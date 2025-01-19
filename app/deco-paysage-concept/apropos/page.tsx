import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Deco Paysage Concept" businessHref="/deco-paysage-concept"/>
      <AboutHero businessName="de Deco Paysage Concept"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Deco Paysage Concept"
          phoneNumber="+33 6 22 95 70 20"
          address="17 Bd de la Croisette"
        />
    </main>
  );
}

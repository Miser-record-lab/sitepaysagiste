import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Concept Paysage - Gazon Synthétique" businessHref="/concept-paysage-gazon-synthetique"/>
      <AboutHero businessName="de Concept Paysage - Gazon Synthétique"/>
      <AboutInfo region="Grasse"/>
      <AboutUs />
      <Footer 
          businessName="Concept Paysage - Gazon Synthétique"
          phoneNumber="+33 6 62 76 99 46"
          address="Av. Sidi Brahim, 06130 Grasse"
        />
    </main>
  );
}

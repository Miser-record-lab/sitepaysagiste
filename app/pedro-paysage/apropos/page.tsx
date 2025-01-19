import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Pedro Paysage" businessHref="/pedro-paysage"/>
      <AboutHero businessName="de Pedro Paysage"/>
      <AboutInfo region="Pégomas"/>
      <AboutUs />
      <Footer 
          businessName="Edouard Jardins"
          phoneNumber="+33 6 35 11 14 98"
          address="81 Chem. de la Font des Muls, 06580 Pégomas"
        />
    </main>
  );
}

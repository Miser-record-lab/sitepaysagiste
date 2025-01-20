import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Les Terrasses Vertes" businessHref="/les-terrasses-vertes"/>
      <AboutHero businessName="des Terrasses Vertes"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Les Terrasses Vertes"
          phoneNumber="+33 7 50 03 59 11"
          address="27 Chem. de Terron, 06200 Nice"
        />
    </main>
  );
}

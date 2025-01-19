import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Cédric Jardins" businessHref="/cedric-jardins"/>
      <AboutHero businessName="de Cédric Jardins"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Cédric Jardins"
          phoneNumber="+33 6 67 17 90 63"
          address="12 Chem. de la Merlette"
        />
    </main>
  );
}

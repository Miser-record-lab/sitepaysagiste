import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Californie Jardins" businessHref="/californie-jardins"/>
      <AboutHero businessName="de Californie Jardins"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Californie Jardins"
          phoneNumber="+33 4 93 18 05 78"
          address="166 Av. Sainte-Marguerite, 06200 Nice"
        />
    </main>
  );
}

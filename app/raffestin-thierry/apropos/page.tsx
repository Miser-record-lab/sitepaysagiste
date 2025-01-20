import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Raffestin Thierry" businessHref="/raffestin-thierry"/>
      <AboutHero businessName="de Raffestin Thierry"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Raffestin Thierry"
          phoneNumber="+33 6 34 58 62 66"
          address="51 Av. de l'Arbre Inférieur, 06000 Nice"
        />
    </main>
  );
}

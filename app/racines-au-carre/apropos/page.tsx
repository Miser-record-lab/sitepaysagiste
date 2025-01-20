import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Racines au Carré" businessHref="/racines-au-carre"/>
      <AboutHero businessName="de Racines au Carré"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Racines au Carré"
          phoneNumber="+33 6 69 96 04 49"
          address=""
        />
    </main>
  );
}

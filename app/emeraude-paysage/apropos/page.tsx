import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Emeraude Paysage" businessHref="/emeraude-paysage"/>
      <AboutHero businessName="d'Emeraude Paysage"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Emeraude Paysage"
          phoneNumber="+33 6 23 11 55 09"
          address="9 Av. Cernuschi, 06100 Nice"
        />
    </main>
  );
}

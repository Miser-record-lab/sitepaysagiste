import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Jardins de Valmont" businessHref="/jardins-de-valmont"/>
      <AboutHero businessName="des Jardins de Valmont"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Jardins de Valmont"
          phoneNumber="+33 4 93 52 23 20"
          address="120 Av. de Gairaut, 06000 Nice"
        />
    </main>
  );
}

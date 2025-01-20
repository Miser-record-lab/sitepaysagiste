import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Allo Jardin" businessHref="/allo-jardin"/>
      <AboutHero businessName="d'Allo Jardin"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Allo Jardin"
          phoneNumber="+33 4 93 54 84 66"
          address="27 Bd de l'Ariane, 06300 Nice"
        />
    </main>
  );
}

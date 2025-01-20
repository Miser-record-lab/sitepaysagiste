import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Pensée Jardin" businessHref="/pensee-jardin"/>
      <AboutHero businessName="de Pensée Jardin"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Pensée Jardin"
          phoneNumber="+33 6 85 81 60 94"
          address="22 Rue Barla, 06300 Nice"
        />
    </main>
  );
}

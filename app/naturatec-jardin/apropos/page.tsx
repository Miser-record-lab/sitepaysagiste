import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Naturatec Jardin" businessHref="/naturatec-jardin"/>
      <AboutHero businessName="de Naturatec Jardin"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Naturatec Jardin"
          phoneNumber="+33 6 23 32 80 69"
          address="90 Bd de Cessole, 06100 Nice"
        />
    </main>
  );
}

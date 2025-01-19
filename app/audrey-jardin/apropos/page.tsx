import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Audrey Jardin" businessHref="/audrey-jardin"/>
      <AboutHero businessName="d'Audrey Jardin"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Audrey Jardin"
          phoneNumber="+33 4 93 45 72 55"
          address="16 Av. du Grand Jas"
        />
    </main>
  );
}

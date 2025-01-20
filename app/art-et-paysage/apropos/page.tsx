import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Art et Paysage" businessHref="/art-et-paysage"/>
      <AboutHero businessName="d'Art et Paysage"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Art et Paysage"
          phoneNumber="+33 4 93 62 58 46"
          address="30 Av. Jean Médecin, 06000 Nice"
        />
    </main>
  );
}

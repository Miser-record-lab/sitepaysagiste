import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Esterel Garden" businessHref="/esterel-garden"/>
      <AboutHero businessName="d'Esterel Garden"/>
      <AboutInfo region="Mougins"/>
      <AboutUs />
      <Footer 
          businessName="Esterel Garden"
          phoneNumber="+33 6 68 22 13 03"
          address=""
        />
    </main>
  );
}

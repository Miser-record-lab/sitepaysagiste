import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Mathieu Berrigaud Paysage" businessHref="/mathieu-berrigaud-paysage"/>
      <AboutHero businessName="de Mathieu Berrigaud Paysage"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Mathieu Berrigaud Paysage"
          phoneNumber="+33 6 50 52 68 05"
          address=""
        />
    </main>
  );
}

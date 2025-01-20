import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="LM Paysage" businessHref="/lm-paysage"/>
      <AboutHero businessName="de LM Paysage"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="LM Paysage"
          phoneNumber="+33 7 66 80 44 23"
          address=""
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Gecko Paysage" businessHref="/gecko-paysage"/>
      <AboutHero businessName="de Gecko Paysage"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Gecko Paysage"
          phoneNumber="+33 6 68 80 13 31"
          address=""
        />
    </main>
  );
}

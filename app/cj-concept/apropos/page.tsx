import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="CJ Concept" businessHref="/cj-concept"/>
      <AboutHero businessName="de CJ Concept"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="CJ Concept"
          phoneNumber="+33 4 93 71 38 70"
          address="40 Av. Sainte-Marguerite, 06200 Nice"
        />
    </main>
  );
}

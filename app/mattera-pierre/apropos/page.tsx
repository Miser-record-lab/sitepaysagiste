import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Mattera Pierre" businessHref="/mattera-pierre"/>
      <AboutHero businessName="de Mattera Pierre"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Mattera Pierre"
          phoneNumber="+33 6 09 09 71 46"
          address="12 Bd Comte de Falicon, 06100 Nice"
        />
    </main>
  );
}

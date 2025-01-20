import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="LB Jardins" businessHref="/lb-jardins"/>
      <AboutHero businessName="de LB Jardins"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="LB Jardins"
          phoneNumber="+33 6 13 40 98 77"
          address="119 Bd Pasteur, 06000 Nice"
        />
    </main>
  );
}

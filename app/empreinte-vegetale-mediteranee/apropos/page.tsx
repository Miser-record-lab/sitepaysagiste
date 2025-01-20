import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Empreinte Végétale Méditeranée" businessHref="/empreinte-vegétale-mediteranee"/>
      <AboutHero businessName="de Empreinte Végétale Méditeranée"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Empreinte Végétale Méditeranée"
          phoneNumber="+33 6 47 30 18 29"
          address="23 Av. Colombo, 06000 Nice"
        />
    </main>
  );
}

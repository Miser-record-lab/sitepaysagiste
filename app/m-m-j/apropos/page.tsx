import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="M.M.J" businessHref="/m-m-j"/>
      <AboutHero businessName="de M.M.J"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="M.M.J"
          phoneNumber="+33 6 26 57 04 48"
          address="164 Chem. du Cal de Spagnol-Soubran, 06200 Nice"
        />
    </main>
  );
}

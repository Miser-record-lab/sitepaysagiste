import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="PACA Paysage" businessHref="/paca-paysage"/>
      <AboutHero businessName="de PACA Paysage"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="PACA Paysage"
          phoneNumber="+33 4 97 22 20 90"
          address="265 Rte du Pont de la Manda, 06640 Saint-Jeannet"
        />
    </main>
  );
}

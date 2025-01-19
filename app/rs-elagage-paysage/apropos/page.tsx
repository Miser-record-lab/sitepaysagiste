import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="RS Elagage & Paysage" businessHref="/rs-elagage-paysage"/>
      <AboutHero businessName="de RS Elagage & Paysage"/>
      <AboutInfo region="Grasse"/>
      <AboutUs />
      <Footer 
          businessName="RS Elagage & Paysage"
          phoneNumber="+33 6 19 06 01 82"
          address="160 Rte de Cannes, 06130 Grasse"
        />
    </main>
  );
}

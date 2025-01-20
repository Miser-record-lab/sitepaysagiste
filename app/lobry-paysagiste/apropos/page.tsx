import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Lobry Paysagiste" businessHref="/lobry-paysagiste"/>
      <AboutHero businessName="de Lobry Paysagiste"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Lobry Paysagiste"
          phoneNumber="+33 6 19 78 82 34"
          address="253 de contournement du, Bd du Mercantour, 06200 Nice"
        />
    </main>
  );
}

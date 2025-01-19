import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Jardinier Paysagiste Cannes et Mougins" businessHref="/Jardinier-Paysagiste-Cannes-et-Mougins"/>
      <AboutHero businessName="de Jardinier Paysagiste Cannes et Mougins"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Jardinier Paysagiste Cannes et Mougins"
          phoneNumber="+33 6 63 78 31 34"
          address="22 Av. du Camp Long"
        />
    </main>
  );
}

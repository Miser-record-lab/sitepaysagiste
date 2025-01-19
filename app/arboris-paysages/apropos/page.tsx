import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Arboris Paysages Cannes" businessHref="/arboris-paysages"/>
      <AboutHero businessName="d'Arboris Paysages Cannes"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Arboris Paysages Cannes"
          phoneNumber="+33 6 89 33 56 66"
          address=""
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Le Saux Gilles" businessHref="/le-saux-gilles"/>
      <AboutHero businessName="de Le Saux Gilles"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Le Saux Gilles"
          phoneNumber="+33 4 93 62 25 08"
          address="17 Rue Bavastro, 06300 Nice"
        />
    </main>
  );
}

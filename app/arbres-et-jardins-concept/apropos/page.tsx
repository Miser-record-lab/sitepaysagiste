import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Arbres et jardins concept" businessHref="/arbres-et-jardins-concept"/>
      <AboutHero businessName="d'Arbres et jardins concept"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Arbres et jardins concept"
          phoneNumber="+33 6 12 62 36 46"
          address=""
        />
    </main>
  );
}

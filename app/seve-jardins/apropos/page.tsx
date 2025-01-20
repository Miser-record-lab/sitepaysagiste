import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="S.e.v.e Jardins" businessHref="/seve-jardins"/>
      <AboutHero businessName="de S.e.v.e Jardins"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="S.e.v.e Jardins"
          phoneNumber="+33 4 93 83 15 50"
          address="48 Rue Rossini, 06000 Nice"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Jardin Nature" businessHref="/jardin-nature"/>
      <AboutHero businessName="de Jardin Nature"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Jardin Nature"
          phoneNumber="+33 4 92 09 90 80"
          address="122 Cor des Oliviers, 06000 Nice"
        />
    </main>
  );
}

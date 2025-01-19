import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Jeannot élagage monaco" businessHref="/jeannot-elagage-monaco"/>
      <AboutHero businessName="de Jeannot élagage monaco"/>
      <AboutInfo region="Monaco"/>
      <AboutUs />
      <Footer 
          businessName="Jeannot élagage monaco"
          phoneNumber="+33 6 28 84 83 94"
          address=""
        />
    </main>
  );
}

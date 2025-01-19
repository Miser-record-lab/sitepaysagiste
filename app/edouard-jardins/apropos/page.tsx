import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Edouard Jardins" businessHref="/edouard-jardins"/>
      <AboutHero businessName="d'Edouard Jardins"/>
      <AboutInfo region="Valbonne"/>
      <AboutUs />
      <Footer 
          businessName="Edouard Jardins"
          phoneNumber="+33 7 68 90 98 76"
          address=""
        />
    </main>
  );
}

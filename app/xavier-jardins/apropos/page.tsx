import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Xavier Jardins" businessHref="/xavier-jardins"/>
      <AboutHero businessName="de Xavier Jardins"/>
      <AboutInfo region="Valbonne"/>
      <AboutUs />
      <Footer 
          businessName="Xavier Jardins"
          phoneNumber="+33 6 64 35 44 01"
          address="Voie Romaine, 06460, Caussols"
        />
    </main>
  );
}

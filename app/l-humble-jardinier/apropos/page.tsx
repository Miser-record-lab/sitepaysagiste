import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="l'Humble Jardinier" businessHref="/l-humble-jardinier"/>
      <AboutHero businessName="de l'Humble Jardinier"/>
      <AboutInfo region="Valbonne" />
      <AboutUs />
      <Footer 
          businessName="l'Humble Jardinier"
          phoneNumber="+33 6 14 98 29 41"
          address=""
        />
    </main>
  );
}

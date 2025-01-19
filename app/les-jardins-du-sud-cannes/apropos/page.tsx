import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Les Jardins du Sud Cannes" businessHref="/les-jardins-du-sud-cannes"/>
      <AboutHero businessName="des Jardins du Sud Cannes"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Les Jardins du Sud Cannes"
          phoneNumber="+33 6 10 11 11 16"
          address=""
        />
    </main>
  );
}

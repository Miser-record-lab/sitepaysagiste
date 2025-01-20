import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Les Jardins de Saint Jean" businessHref="/les-jardins-de-saint-jean"/>
      <AboutHero businessName="des Jardins de Saint Jean"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Les Jardins de Saint Jean"
          phoneNumber="+33 6 37 14 28 20"
          address="15 Av. Lympia, 06300 Nice"
        />
    </main>
  );
}

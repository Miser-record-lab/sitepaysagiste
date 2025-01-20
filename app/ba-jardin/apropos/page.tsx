import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="BA Jardin" businessHref="/ba-jardin"/>
      <AboutHero businessName="de BA Jardin"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="BA Jardin"
          phoneNumber="+33 6 95 60 29 95"
          address="87 Av. George V, 06000 Nice"
        />
    </main>
  );
}

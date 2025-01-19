import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Chartoire Garden" businessHref="/chartoire-garden"/>
      <AboutHero businessName="de Chartoire Garden"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Chartoire Garden"
          phoneNumber="+33 6 29 65 28 54"
          address=""
        />
    </main>
  );
}

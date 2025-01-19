import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Derrick Garden" businessHref="/derrick-garden"/>
      <AboutHero businessName="de Derrick Garden"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Derrick Garden"
          phoneNumber="+33 6 13 10 57 07"
          address="2 Rue Philibert Delorme"
        />
    </main>
  );
}

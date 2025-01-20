import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Rex Gardener" businessHref="/rex-gardener"/>
      <AboutHero businessName="de Rex Gardener"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Rex Gardener"
          phoneNumber="+33 6 79 76 52 41"
          address=""
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="MEP Paysage" businessHref="/mep-paysage"/>
      <AboutHero businessName="de MEP Paysage"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="MEP Paysage"
          phoneNumber="+33 6 25 54 15 50"
          address=""
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Monaco Aménagement Paysager" businessHref="/monaco-amenagement-paysager"/>
      <AboutHero businessName="de Monaco Aménagement Paysager"/>
      <AboutInfo region="Monaco"/>
      <AboutUs />
      <Footer 
          businessName="Monaco Aménagement Paysager"
          phoneNumber="+33 6 29 65 69 62"
          address=""
        />
    </main>
  );
}

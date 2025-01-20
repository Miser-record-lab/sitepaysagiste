import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Laroche Jeremy" businessHref="/laroche-jeremy"/>
      <AboutHero businessName="de Laroche Jeremy"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Laroche Jeremy"
          phoneNumber="+33 4 89 00 18 57"
          address="28 Av. Lorenzi, 06100 Nice"
        />
    </main>
  );
}

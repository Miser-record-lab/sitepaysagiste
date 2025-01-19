import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Sargiotto Didier" businessHref="/sargiotto-didier"/>
      <AboutHero businessName="de Sargiotto Didier"/>
      <AboutInfo region="Mougins"/>
      <AboutUs />
      <Footer 
          businessName="Sargiotto Didier"
          phoneNumber="+33 6 21 54 21 28"
          address="993 Bd de la Corniche, 06250 Mougins"
        />
    </main>
  );
}

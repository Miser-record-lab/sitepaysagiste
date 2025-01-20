import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Trentini Paysagiste" businessHref="/trentini-paysagiste"/>
      <AboutHero businessName="de Trentini Paysagiste"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Trentini Paysagiste"
          phoneNumber="+33 7 56 83 89 56"
          address="433 Chem. de Saquier, 06200 Nice"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Maurice Jardins Paysages" businessHref="/maurice-jardins-paysages"/>
      <AboutHero businessName="de Maurice Jardins Paysages"/>
      <AboutInfo region="Cannes"/>
      <AboutUs />
      <Footer 
          businessName="Maurice Jardins Paysages"
          phoneNumber="+33 4 93 43 60 57"
          address="75 Av. Maréchal Juin"
        />
    </main>
  );
}

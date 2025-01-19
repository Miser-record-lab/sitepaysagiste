import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="MN Jardins" businessHref="/mn-jardins"/>
      <AboutHero businessName="de MN Jardins"/>
      <AboutInfo region="Mougins"/>
      <AboutUs />
      <Footer 
          businessName="MN Jardins"
          phoneNumber="+33 6 28 98 82 24"
          address="105 Chem. des Pilons, 06370 Mouans-Sartoux"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Ab Jardins Monaco" businessHref="/ab-jardins-monaco"/>
      <AboutHero businessName="d'Ab Jardins Monaco"/>
      <AboutInfo region="Monaco"/>
      <AboutUs />
      <Footer 
          businessName="Ab Jardins Monaco"
          phoneNumber="+33 4 93 64 63 19"
          address="Le Patio Palace, 41 Av. Hector Otto, 98000 Monaco"
        />
    </main>
  );
}

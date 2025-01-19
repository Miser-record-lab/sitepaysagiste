import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Aubert Jean Marc Roger" businessHref="/aubert-jean-marc-roger"/>
      <AboutHero businessName="d'Aubert Jean Marc Roger"/>
      <AboutInfo region="Mandelieu"/>
      <AboutUs />
      <Footer 
          businessName="Aubert Jean Marc Roger"
          phoneNumber="+33 4 93 93 00 23"
          address="391 Av. de Cannes, 06210 Mandelieu-la-Napoule"
        />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Sandrine Verrando Paysagiste" businessHref="/sandrine-verrando-paysagiste"/>
      <AboutHero businessName="de Sandrine Verrando Paysagiste"/>
      <AboutInfo region="Nice"/>
      <AboutUs />
      <Footer 
          businessName="Sandrine Verrando Paysagiste"
          phoneNumber="+33 6 27 21 20 22"
          address=""
        />
    </main>
  );
}

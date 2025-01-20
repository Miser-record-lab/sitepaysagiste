import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Entreprise Monégasque d'Espaces Verts" businessHref="/entreprise-monegasque-d-espaces-verts"/>
      <AboutHero businessName="de l'Entreprise Monégasque d'Espaces Verts"/>
      <AboutInfo region="Monaco"/>
      <AboutUs />
      <Footer 
          businessName="Entreprise Monégasque d'Espaces Verts"
          phoneNumber="+377 93 30 18 34"
          address="38 Bd du Jardin Exotique, 98000 Monaco"
        />
    </main>
  );
}

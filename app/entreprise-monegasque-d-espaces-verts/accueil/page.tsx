import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Presentation from "@/components/Presentation";
import ServicesContact from "@/components/ServicesContact";

export default function Home() {
  return (
    <main>
      <div>
        <Header businessName="Entreprise Monégasque d'Espaces Verts" businessHref="/entreprise-monegasque-d-espaces-verts"/>
        <Hero businessName="Entreprise Monégasque d'Espaces Verts"/>
        <Presentation 
          businessName="Entreprise Monégasque d'Espaces Verts"
          profession="paysagiste"
          location="Monaco"
        />
        <Features />
        <Location 
          cities={['Monte-Carlo', 'La Condamine', 'Fontvieille', 'Moneghetti', 'Larvotto', 'Jardin Exotique', 'Monaco-Ville', 'Saint-Roman', 'Le Port Hercule', 'Spélugues']} 
          introText="Nous couvrons Monaco et ses quartiers prestigieux" 
        />
        <ServicesContact />
        <Footer 
          businessName="Entreprise Monégasque d'Espaces Verts"
          phoneNumber="+377 93 30 18 34"
          address="38 Bd du Jardin Exotique, 98000 Monaco"
        />
      </div>
    </main>
  );
}

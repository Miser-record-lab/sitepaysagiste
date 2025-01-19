import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutUs from "@/components/AboutUs";

export default function About() {
  return (
    <main>
      <Header businessName="Pascal Beauvis artisan jardinier" businessHref="/pascal-beauvis-artisan-jardinier"/>
      <AboutHero businessName="de Pascal Beauvis artisan jardinier"/>
      <AboutInfo region="Mandelieu"/>
      <AboutUs />
      <Footer 
          businessName="Pascal Beauvis artisan jardinier"
          phoneNumber="+33 6 82 44 90 84"
          address=""
        />
    </main>
  );
}

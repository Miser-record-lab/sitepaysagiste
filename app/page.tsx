import AboutSection from "@/components/website/AboutWebsite";
import Collaboration from "@/components/website/CollaborationWebsite";
import ContactWebsite from "@/components/website/ContactWebsite";
import FooterWebsite from "@/components/website/FooterWebsite";
import HeaderWebsite from "@/components/website/HeaderWebsite";
import HeroWebsite from "@/components/website/HeroWebsite";
import PriceWebsite from "@/components/website/PriceWebsite";


export default function Home() {
  return (
    <main>
      <div>
        <HeaderWebsite />
        <HeroWebsite />
        <AboutSection />
        <Collaboration />
        <PriceWebsite />
        <ContactWebsite />
        <FooterWebsite />
      </div>
    </main>
  );
}

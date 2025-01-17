import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Location from "@/components/Location";
import ContactContact from "@/components/ContactContact";
import ContactPhone from "@/components/ContactPhone";



export default function Contact() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactPhone />
      <ContactContact />
      <Location />
      <Footer />
    </main>
  );
}

import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Story } from "./components/Story";
import { Products } from "./components/Products";
import { WhyUs } from "./components/WhyUs";
import { Proof } from "./components/Proof";
import { Testimonials } from "./components/Testimonials";
import { HowToOrder } from "./components/HowToOrder";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Story />
        <Products />
        <WhyUs />
        <Proof />
        <Testimonials />
        <HowToOrder />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}


import {Header} from '@/components/Header';
import FeaturesSection from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import PricingSection from "@/components/Home/PricingSection";
import CtaSection from "@/components/Home/cta-section";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection /> 
       <CtaSection />
       <Footer />
    </div>
  );
}



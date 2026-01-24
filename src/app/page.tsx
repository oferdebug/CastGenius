
import Header from "@/components/Header";
import FeaturesSection from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import PricingSection from "@/components/Home/PricingSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection /> 
      {/* <CTASection /> */}
      {/* <Footer /> */}
    </div>
  );
}



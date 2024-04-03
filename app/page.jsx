import BeverageSection from "@/components/templates/main/BeverageSection/BeverageSection";
import CategoriesSection from "@/components/templates/main/CategoriesSection/CategoriesSection";
import DessertSection from "@/components/templates/main/DessertSection/DessertSection";
import HeroSection from "@/components/templates/main/HeroSection/HeroSection";
import PizzaSection from "@/components/templates/main/PizzaSection/PizzaSection";
import SandwichSection from "@/components/templates/main/SandwichSection/SandwichSection";
import { SocialMedia } from "@/components/templates/main/SocialMedia/SocialMedia";

export default function Home() {
  return (
    <div className="py-5">
      
      <HeroSection />
      <PizzaSection />
      <SandwichSection />
      <CategoriesSection />
      <DessertSection />
      <BeverageSection />
      <SocialMedia />
    </div>
  );
}
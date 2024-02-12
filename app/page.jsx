import BeverageSection from "@/components/templates/main/BeverageSection/BeverageSection";
import DessertSection from "@/components/templates/main/DessertSection/DessertSection";
import HeroSection from "@/components/templates/main/HeroSection/HeroSection";
import PizzaSection from "@/components/templates/main/PizzaSection/PizzaSection";
import SandwichSection from "@/components/templates/main/SandwichSection/SandwichSection";

export default function Home() {
  return (
    <div className="py-5">
      <HeroSection />
      <PizzaSection />
      <SandwichSection />
      <DessertSection />
      <BeverageSection />
    </div>
  );
}

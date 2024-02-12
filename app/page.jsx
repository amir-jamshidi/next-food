import DessertSection from "@/components/templates/main/DessertSection/DessertSection";
import HeroSection from "@/components/templates/main/HeroSection/HeroSection";
import PizzaSection from "@/components/templates/main/PizzaSection/PizzaSection";

export default function Home() {
  return (
    <div className="py-5">
      <HeroSection />
      <PizzaSection />
      <DessertSection />
    </div>
  );
}

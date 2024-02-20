import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { getMeals, getPizzas } from "@/libs/requests";

import MealItem from "@/components/modules/MealItem/MealItem";
import MoreSection from "@/components/modules/MoreSection/MoreSection";

const PizzaSection = async () => {
  const pizzas = await getMeals("pizza");
  return (
    <div>
      <TitleSection title="پیتزا" />
      <div className="grid grid-cols-4 gap-2 my-12">
        {pizzas.map((pizza) => (
          <MealItem key={pizza._id} meal={pizza} />
        ))}
      </div>
      <MoreSection href={'pizza'} />
    </div>
  );
};

export default PizzaSection;

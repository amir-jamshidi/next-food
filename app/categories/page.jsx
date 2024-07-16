import PageTitle from "@/components/modules/PageTitle/PageTitle";
import CategoriesSection from "@/components/templates/Categories/CategoriesSection";

export const metadata = {
  title: "نکست فود | دسته بندی ها",
};
const Categories = () => {
  return (
    <div>
      <PageTitle title="دسته بندی هـا" />
      <CategoriesSection />
    </div>
  );
};
export default Categories;

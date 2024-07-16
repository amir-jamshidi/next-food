import PageTitle from "@/components/modules/PageTitle/PageTitle";
import SearchComponent from "@/components/templates/search/SearchComponent";
import SearchMealsSection from "@/components/templates/search/SearchMealsSection";
import { getMealsBySearch } from "@/libs/requests";

export const metadata = {
  title: "نکست فود | جستجو",
};

const Search = async ({ searchParams }) => {
  const meals = await getMealsBySearch(searchParams.query);

  return (
    <div>
      <PageTitle title="جستجو" />
      <SearchComponent />
      <SearchMealsSection meals={meals} />
    </div>
  );
};

export default Search;

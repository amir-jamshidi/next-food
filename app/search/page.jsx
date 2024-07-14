import PageTitle from "@/components/modules/PageTitle/PageTitle";
import SearchComponent from "@/components/templates/Search/SearchComponent";
import SearchMealsSection from "@/components/templates/Search/SearchMealsSection";
import { getMealsBySearch } from "@/libs/requests";

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

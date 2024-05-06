import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
import useSearch from "../../hooks/useSearch";
import "./search.css";

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const term = queryParams.get("q");
  const { data, error, isLoading } = useSearch(term);

  return (
    <div>
      <h2 className="page-title">Recipe including "{term}"</h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;

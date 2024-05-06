import RecipeList from "../../components/RecipeList";
import useRecipe from "../../hooks/useRecipe";
import "./home.css";

const Home = () => {
  const { data, error, isLoading } = useRecipe();

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;

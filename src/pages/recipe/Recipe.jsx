import { useParams } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import useSingleRecipe from "../../hooks/useSingleRecipe";
import "./recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const { mode } = useTheme();

  const { recipe, error, isLoading } = useSingleRecipe(id);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe &&
              recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;

import { Link } from "react-router-dom";
import trash from "../assets/trash.svg";
import useTheme from "../hooks/useTheme";
import projectFirestore from "../services/config";
import "./recipelist.css";

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <p className="error">Result not found...</p>;
  }

  const handleDelete = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} minutes to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={trash}
            onClick={() => handleDelete(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

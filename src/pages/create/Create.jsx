import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import projectFirestore from "../../services/config";
import useTheme from "../../hooks/useTheme";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState(0);
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();
  const { mode, color } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = { title, method, cookingTime, ingredients };

    try {
      await projectFirestore.collection("recipes").add(doc);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ingredient = newIngredient.trim();

    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className={`create ${mode}`}>
      <h2 className={`page-title ${mode}`}>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} style={{ background: color }}>
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:
          {ingredients.map((ingredient) => (
            <em key={ingredient}> {ingredient},</em>
          ))}
        </p>

        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Create;

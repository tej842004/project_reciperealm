import { useState, useEffect } from "react";
import projectFirestore from "../services/config";

const useSingleRecipe = (id) => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setLoading(false);
          setRecipe(doc.data());
        } else {
          setLoading(false);
          setError("Could not find that recipe...");
        }
      });
  }, [id]);

  return { recipe, error, isLoading };
};

export default useSingleRecipe;

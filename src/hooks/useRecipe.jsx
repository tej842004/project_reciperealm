import { useState, useEffect } from "react";
import projectFirestore from "../services/config";

const useRecipe = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No recipes to load...");
          setLoading(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setLoading(false);
        }
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  return { data, error, isLoading };
};

export default useRecipe;

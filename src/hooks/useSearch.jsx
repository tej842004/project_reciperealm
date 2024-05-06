import { useEffect, useState } from "react";
import projectFirestore from "../services/config";

const useSearch = (term) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    projectFirestore
      .collection("recipes")
      .where("title", ">=", term)
      .where("title", "<=", term + "\uf8ff")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("No result found");
          setLoading(false);
        } else {
          const results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setLoading(false);
        }
      })
      .catch(() => {
        setError("Could not find the recipe");
        setLoading(false);
      });
  }, [term]);
  return { data, error, isLoading };
};

export default useSearch;

import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(youtubeID) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const questionsRef = ref(db, "quiz/" + youtubeID + "/questions");
      const questionQuery = query(questionsRef, orderByKey());
      try {
        setError(false);
        setLoding(true);
        const snapShot = await get(questionQuery);
        setLoding(false);
        if (snapShot.exists()) {
          setQuestions((prev) => {
            return [...prev, ...Object.values(snapShot.val())];
          });
        }
      } catch (error) {
        setLoding(false);
        console.log(error.message);
        setError(error.message);
      }
    }
    fetchQuestions();
  }, [youtubeID]);

  return {
    loading,
    error,
    questions,
  };
}

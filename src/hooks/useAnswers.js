import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(youtubeID) {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + youtubeID + "/questions");
      const answerQuery = query(answerRef, orderByKey());
      try {
        setError(false);
        setLoding(true);
        const snapShot = await get(answerQuery);
        setLoding(false);
        if (snapShot.exists()) {
          setAnswers((prev) => {
            return [...prev, ...Object.values(snapShot.val())];
          });
        }
      } catch (error) {
        setLoding(false);
        console.log(error.message);
        setError(error.message);
      }
    }
    fetchAnswers();
  }, [youtubeID]);

  return {
    loading,
    error,
    answers,
  };
}

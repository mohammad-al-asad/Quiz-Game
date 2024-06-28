import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideos(start) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + start),
        limitToFirst(8)
      );
      try {
        setError(false);
        setLoding(true);
        const snapShot = await get(videoQuery);
        setLoding(false);
        if (snapShot.exists()) {
          setVideos((prev) => {
            return [...prev, ...Object.values(snapShot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        setLoding(false);
        console.log(error.message);
        setError(error.message);
      }
    }
    fetchVideos();
  }, [start]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}

import Video from "./Video";
import { Link } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

function Videos() {
  const [start, setStart] = useState(1);
  const { loading, error, videos, hasMore } = useVideos(start);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setStart((prev)=>prev + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video
                  id={video.youtubeID}
                  title={video.title}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                key={video.youtubeID}
                id={video.youtubeID}
                title={video.title}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length < 0 && (
        <div className="center">No videos found!</div>
      )}
      {loading && <div className="center">Loading...</div>}
      {error && <div className="center">There was an error!</div>}
    </div>
  );
}

export default Videos;

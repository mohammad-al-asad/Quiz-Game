/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import classes from "../styles/MiniPlayer.module.css";
import ReactPlayer from "react-player/youtube";

function MiniPlayer({ id,title }) {
  const [status, setStatus] = useState(false);
  const miniPlayerRef = useRef();
  function toogleMiniPlayer() {
    if (status) {
      setStatus(false);
      miniPlayerRef.current.classList.add(classes.floatingBtn);
    } else {
      setStatus(true);
      miniPlayerRef.current.classList.remove(classes.floatingBtn);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={miniPlayerRef}
      onClick={toogleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className={classes.player}
        width="300px"
        height="168px"
        playing={status}
      />
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;

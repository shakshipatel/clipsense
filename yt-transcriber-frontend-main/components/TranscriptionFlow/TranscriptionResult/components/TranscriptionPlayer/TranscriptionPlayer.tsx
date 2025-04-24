import YouTube, { YouTubeProps } from 'react-youtube';

import { useAppSelector } from "@/lib/hooks";
import { selectYoutubeLink } from "@/lib/features/currentDialog/currentDialogSlice";

import { extractYouTubeVideoId } from "@/utils/parser/youtubeLinkParser";

import styles from "./TranscriptionPlayer.module.scss";

const TranscriptionPlayer = () => {
  const youtubeLink = useAppSelector(selectYoutubeLink);
  const videoId = extractYouTubeVideoId(youtubeLink);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '280',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.video}>
        <YouTube videoId={videoId || ""} opts={opts} onReady={onPlayerReady} className={styles.player}/>
      </div>
    </div>
  )
}

export default TranscriptionPlayer
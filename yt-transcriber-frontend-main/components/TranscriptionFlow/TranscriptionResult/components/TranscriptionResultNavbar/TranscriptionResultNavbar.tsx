import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectSummary,
  selectTranscriptionName,
  setTranscriptionName,
} from "@/lib/features/summary/summarySlice";

import GhostButton from "@/ui/Buttons/GhostButton/GhostButton";
import GradientButton from "@/ui/Buttons/GradientButton/GradientButton";

import profileCircle from "@/images/profile-circle.svg";
import eye from "@/images/eye.svg";

import styles from "./TranscriptionResultNavbar.module.scss";
import { successToast } from "@/utils/toast";

const TranscriptionResultNavbar = () => {
  const dispatch = useAppDispatch();
  const youtubeUser = useAppSelector(selectSummary).youtubeUser;
  const transcriptionName = useAppSelector(selectTranscriptionName);

  return (
    <div className={styles.navbar}>
      <div className={styles.text_container}>
        <input
          onChange={(e) => {
            dispatch(setTranscriptionName(e.target.value));
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              console.log("hello");
            }
          }}
          className={styles.title}
          value={transcriptionName}
          placeholder="Enter title"
        />
        <div className={styles.info_container}>
          <div className={styles.info}>
            <Image width={14} height={14} src={profileCircle} alt="profile" />
            <p>{youtubeUser?.user?.first_name}</p>
          </div>
          <div className={styles.info}>
            <Image width={14} height={14} src={eye} alt="views" />
            <p>{youtubeUser?.views} Views</p>
          </div>
        </div>
      </div>
      <div className={styles.action_container}>
        <GhostButton
          onClick={() => {
            navigator.clipboard.writeText(
              `${location.host}/share/${youtubeUser?.id}`
            );
            successToast("Link copied to clipboard");
          }}
        >
          <p>Share</p>
        </GhostButton>
        <GradientButton
          text="Download"
          noShadow={true}
          onClick={() => {
            window.print();
          }}
        />
      </div>
    </div>
  );
};

export default TranscriptionResultNavbar;

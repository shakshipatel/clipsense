import Image from "next/image";

import { useAppSelector } from "@/lib/hooks";
import { selectSummary } from "@/lib/features/summary/summarySlice";

import Sparkle from "@/images/sparkle.svg";

import styles from "./TranscriptionKeywords.module.scss";

const TranscriptionKeywords = () => {
  const hashtags = useAppSelector(selectSummary).hashtags;
  

  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <Image src={Sparkle} width={16} alt="AI" />
        <p className={styles.title}>SEO Keywords</p>
        <div className={styles.ai}>
          <p>AI</p>
        </div>
      </div>
      <div className={styles.keywords}>
        {hashtags.map((hashtag, index) => (
          <span key={index} className={styles.hashtag}>
            <p>{hashtag}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TranscriptionKeywords;
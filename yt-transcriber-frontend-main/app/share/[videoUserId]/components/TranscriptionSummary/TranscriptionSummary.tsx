import Image from "next/image";
import Sparkle from "@/images/sparkle.svg";
import Highlight from "./components/Highlight";
import styles from "./TranscriptionSummary.module.scss";
import { JSX } from "react";
import { useAppSelector } from "@/lib/hooks";
import { selectSummary } from "@/lib/features/summary/summarySlice";

const parseText = (text: string, keywords: { [key: string]: { surrounding_text: string; definition: string } }) => {
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  Object.entries(keywords).forEach(([keyword, { surrounding_text, definition }]) => {
    const regex = new RegExp(surrounding_text, "g");
    let match;

    while ((match = regex.exec(text)) !== null) {
      // const [fullMatch] = match;

      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      parts.push(
        <Highlight key={`${keyword}-${match.index}`} keyword={keyword} description={definition}>
        </Highlight>
      );

      lastIndex = regex.lastIndex;
    }
  });

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};
const TranscriptionSummary = () => {
  const data = useAppSelector(selectSummary)
 

  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <Image src={Sparkle} width={16} alt="AI" />
        <p className={styles.title}>Summary</p>
        <div className={styles.ai}>
          <p>AI</p>
        </div>
      </div>
      <div className={styles.text}>{parseText(data.summary.text, data.summary.keywords)}</div>
    </div>
  );
};

export default TranscriptionSummary;
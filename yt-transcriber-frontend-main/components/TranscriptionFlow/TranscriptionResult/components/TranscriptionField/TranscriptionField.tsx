import Image from "next/image"

import { useAppSelector } from "@/lib/hooks"
import { selectSummary } from "@/lib/features/summary/summarySlice"

import LanguageIcon from "@/images/language-circle.svg"
import Export from "@/images/export.svg"
import Profile2 from "@/images/Group.svg"

import styles from "./TranscriptionField.module.scss"

const TranscriptionCell = ({ text, offset }: { text: string, offset: number }) => {
  return (
    <div className={styles.transcript_cell}>
      <div className={styles.cell_header}>
        <div className={styles.header_details}>
          <Image src={Profile2} width={14} alt="profile" />
          <p>{"Narrator"}</p>
        </div>
        <div className={styles.export}>
          <Image src={Export} width={12} alt="export" />
        </div>
      </div>
      <div className={styles.main_content}>
        <p className={styles.text}>{text}</p>
        <div className={styles.timestamp}>
          <p>
            {offset}
          </p>
        </div>
      </div>
    </div>
  )
}

const TranscriptionField = () => {
  const transcript = useAppSelector(selectSummary).transcription

  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <div className={styles.details}>
          <Image src={LanguageIcon} width={16} alt="lang" />
          <p>Transcription</p>
        </div>
        <div className={styles.lang}>
          <p>English</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.4714 10.5147C8.21105 10.775 7.78894 10.775 7.52859 10.5147L4.19526 7.18137C3.93491 6.92102 3.93491 6.49891 4.19526 6.23856C4.45561 5.97821 4.87772 5.97821 5.13807 6.23856L8 9.10049L10.8619 6.23856C11.1223 5.97821 11.5444 5.97821 11.8047 6.23856C12.0651 6.49891 12.0651 6.92102 11.8047 7.18137L8.4714 10.5147Z" fill="#567191"/>
          </svg>
        </div>
      </div>
      <div className={styles.transcript_container}>
      {
        transcript?.map?.((value, index) => {
          return (
            <TranscriptionCell key={index} text={value.text} offset={value.offset} />
          )
        })
      }
      </div>
    </div>
  )
}

export default TranscriptionField
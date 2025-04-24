"use client"

import { setSummary } from "@/lib/features/summary/summarySlice"
import { useAppDispatch } from "@/lib/hooks"
import { axios_instance } from "@/utils/axios_instance"
import { useEffect } from "react"
import styles from "./SharePage.module.scss"
import TranscriptionResultNavbar from "./components/TranscriptionResultNavbar/TranscriptionResultNavbar"
import TranscriptionPlayer from "./components/TranscriptionPlayer/TranscriptionPlayer"
import TranscriptionKeywords from "./components/TranscriptionKeywords/TranscriptionKeywords"
import TranscriptionSummary from "./components/TranscriptionSummary/TranscriptionSummary"
import TranscriptionField from "./components/TranscriptionField/TranscriptionField"

type Props = {
  videoUserId: string
}

const SharePage = ({ videoUserId }: Props) => {
  const dispatch = useAppDispatch();

  const getYoutubeData = async () => {
    const response = await axios_instance.post(`/youtube/share`, { id: videoUserId });
    dispatch(setSummary(response?.data?.data))
  }

  useEffect(() => {
    getYoutubeData()
  }, [])
  return (
    <div className={styles.wrapper}>
      <div className={styles.main_container}>
        <TranscriptionResultNavbar />
        <div className={styles.content}>
          <div className={styles.col1}>
            <TranscriptionPlayer />
            <TranscriptionKeywords />
          </div>
          <div className={styles.col1}>
            <TranscriptionSummary />
            <TranscriptionField />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SharePage
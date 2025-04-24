import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { selectYoutubeLink } from "@/lib/features/currentDialog/currentDialogSlice"
import { setSummary } from "@/lib/features/summary/summarySlice"

import { axios_instance } from "@/utils/axios_instance"

import TranscriptionField from "./components/TranscriptionField/TranscriptionField"
import TranscriptionKeywords from "./components/TranscriptionKeywords/TranscriptionKeywords"
import TranscriptionPlayer from "./components/TranscriptionPlayer/TranscriptionPlayer"
import TranscriptionResultNavbar from "./components/TranscriptionResultNavbar/TranscriptionResultNavbar"
import TranscriptionSummary from "./components/TranscriptionSummary/TranscriptionSummary"

import styles from "./TranscriptionResult.module.scss"

const TranscriptionResult = () => {
  const youtubeUrl = useAppSelector(selectYoutubeLink)
  const dispatch = useAppDispatch();

  const getData = async () => {
    const response = await axios_instance.post("/youtube/summary", { url: youtubeUrl })
    console.log(response.data)
    if ([200, 201].includes(response.status)) {
      dispatch(setSummary(response?.data?.data))
    }
    
  }

  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
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
  )
}

export default TranscriptionResult
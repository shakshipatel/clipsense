import Image from "next/image"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

import { useAppDispatch } from "@/lib/hooks"
import { setCurrentPage, setYoutubeLink as actionSetYoutubeLink } from "@/lib/features/currentDialog/currentDialogSlice"

import SimpleInput from "@/ui/Inputs/SimpleInput/SimpleInput"
import GradientButton from "@/ui/Buttons/GradientButton/GradientButton"

import { transcriberFlowState } from "@/contants/transcriberFlowState"

import ytSoundImage from "@/images/yt-sound-image.png"

import styles from "./TranscriptionOne.module.scss"

const TranscriptionOne = ({ youtubeLink, setYoutubeLink }: { youtubeLink: string, setYoutubeLink: Dispatch<SetStateAction<string>> }) => {
  const dispatch = useAppDispatch()

  const handleYoutubeLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYoutubeLink(e.target.value)
  }

  const onTranscribeCall = () => {
    if (!youtubeLink) return;
    dispatch(actionSetYoutubeLink(youtubeLink))
    dispatch(setCurrentPage(transcriberFlowState.OAUTH))
  }
  return (
    <div className={styles.main_container}>
      <Image src={ytSoundImage} alt="Yt-Sound" priority={true} quality={100} width={138} />
      <div className={styles.text_container}>
        <h1>Transcribe your recording</h1>
        <p>Generate a transcript using our cutting-edge, AI transcription tech.</p>
      </div>
      <SimpleInput value={youtubeLink} onChange={handleYoutubeLinkChange} type="text" placeholder="Enter your youtube url..." />
      <GradientButton onClick={onTranscribeCall} text="Transcribe" />
    </div>
  )
}

export default TranscriptionOne
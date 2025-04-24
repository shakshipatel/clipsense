"use client"

import { useState } from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { selectCurrentDialogPage, setCurrentPage } from "@/lib/features/currentDialog/currentDialogSlice";

import TranscriptionOAuth from "@/components/TranscriptionFlow/TranscriptionOAuth/TranscriptionOAuth";
import TranscriptionOne from "@/components/TranscriptionFlow/TranscriptionOne/TranscriptionOne";
import TranscriptionResult from "@/components/TranscriptionFlow/TranscriptionResult/TranscriptionResult";
import OutlineButton from "@/ui/Buttons/OutlineButton/OutlineButton";

import ArrowLeft from "@/images/arrow-left.svg"

import styles from "./page.module.scss"
import { transcriberFlowState } from "@/contants/transcriberFlowState";

export default function Home() {
  const currentPage = useAppSelector((state) => selectCurrentDialogPage(state));
  const [youtubeLink, setYoutubeLink] = useState("")
  const dispatch = useAppDispatch()

  const goBackSwitch = () => {
    switch (currentPage) {
      default:
        return transcriberFlowState.LINK_SELECTION
    }
  }
  return (
    <div className={styles.main_container}>
      {currentPage == "OAUTH" && <OutlineButton onClick={() => {
        dispatch(setCurrentPage(goBackSwitch()))
      }} className={styles.back_btn}>
        <Image src={ArrowLeft} alt="arrow" quality={100} />
        <p className={styles.outline_p}>Go back</p>
      </OutlineButton>}
      {
        currentPage == "OAUTH" && <TranscriptionOAuth />
      }
      {
        currentPage == "LINK_SELECTION" && <TranscriptionOne youtubeLink={youtubeLink} setYoutubeLink={setYoutubeLink} />
      }
      {
        currentPage == "RESULT" && <TranscriptionResult />
      }
      {/* {
        <TranscriptionOAuth />
      } */}
    </div>
  )
}
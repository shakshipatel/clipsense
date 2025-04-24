import Image from "next/image"

import { useAppSelector } from "@/lib/hooks"
import { selectSummary } from "@/lib/features/summary/summarySlice"

import GhostButton from "@/ui/Buttons/GhostButton/GhostButton"
import GradientButton from "@/ui/Buttons/GradientButton/GradientButton"

import profileCircle from "@/images/profile-circle.svg"
import eye from "@/images/eye.svg"

import styles from "./TranscriptionResultNavbar.module.scss"
import { successToast } from "@/utils/toast"
import { selectUser } from "@/lib/features/user/userSlice"

const TranscriptionResultNavbar = () => {
  const youtubeUser = useAppSelector(selectSummary).youtubeUser
  const user = useAppSelector(selectUser).user

  return (
    <div className={styles.navbar}>
      <div className={styles.text_container}>
        <h2 className={styles.title}>{youtubeUser?.name}</h2>
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
        {user.id == youtubeUser.user_id && <GhostButton onClick={() => {
          navigator.clipboard.writeText(`${location.host}/share/${youtubeUser?.id}`)
          successToast("Link copied to clipboard")
        }}>
          <p>Share</p>
        </GhostButton>}
        <GradientButton text="Save" noShadow={true} onClick={() => {}} />
      </div>
    </div>
  )
}

export default TranscriptionResultNavbar
import TranscriptionOne from "@/components/TranscriptionFlow/TranscriptionOne/TranscriptionOne"
import TranscriptionOAuth from "@/components/TranscriptionFlow/TranscriptionOAuth/TranscriptionOAuth"
import TranscriptionResult from "@/components/TranscriptionFlow/TranscriptionResult/TranscriptionResult"

// export const transcriberFlowStateObject: TranscriberFlowStateObject = {
//   "LINK_SELECTION": TranscriptionOne,
//   "OAUTH": TranscriptionOAuth,
//   "RESULT": TranscriptionResult
// }

export const transcriberFlowState: {
  [key in TranscriberFlowState]: TranscriberFlowState
} = {
  "LINK_SELECTION": "LINK_SELECTION",
  "OAUTH": "OAUTH",
  "RESULT": "RESULT"
}

export type TranscriberFlowState = "LINK_SELECTION" | "OAUTH" | "RESULT"

// export type TranscriberFlowStateObject = {
//   [key in TranscriberFlowState]: React.FC
// }
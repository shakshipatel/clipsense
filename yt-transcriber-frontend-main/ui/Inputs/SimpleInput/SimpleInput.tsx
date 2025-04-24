import { ChangeEvent } from "react"

import styles from "./SimpleInput.module.scss"

type Props = {
  type: "text" | "number",
  placeholder?: string,
  value: string | number,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

const SimpleInput = (props: Props) => {
  return (
    <input onChange={props.onChange} type={props.type} value={props.value} placeholder={props?.placeholder} className={styles.simple_input} />
  )
}

export default SimpleInput
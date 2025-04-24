import styles from "./GradientButton.module.scss"

type Props = {
  onClick: () => void,
  text?: string,
  noShadow?: boolean
}

const GradientButton = (props: Props) => {
  return  props.noShadow ? (
    <div className={styles.gradient_button} onClick={props.onClick}>
      {props?.text}
    </div>
  ) : (
    <div className={styles.gradient_button_outer} onClick={props.onClick}>
      <div className={styles.gradient_button}>
        {props?.text}
      </div>
    </div>
  )
}

export default GradientButton
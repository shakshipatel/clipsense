import styles from "./GhostButton.module.scss"

type Props = {
  onClick?: () => void;
  children?: React.ReactNode
}

const GhostButton = (props: Props) => {
  return (
    <div className={styles.ghost_button} onClick={props?.onClick}>
        {props?.children}
    </div>
  )
}

export default GhostButton
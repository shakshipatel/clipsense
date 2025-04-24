import styles from "./OutlineButton.module.scss"

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string
}

const OutlineButton = (props: Props) => {
  return (
    <div className={`${styles.outline_button} ${props?.className || ""}`} onClick={props?.onClick}>
      <div className={styles.wrapper}>
        {props?.children}
      </div>
    </div>
  )
}

export default OutlineButton
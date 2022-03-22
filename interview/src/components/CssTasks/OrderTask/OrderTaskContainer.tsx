import React from "react"
import styles from 'components/CssTasks/OrderTask/OrderTask.module.css'

/*Необходимо сверстать карточку (см*/
export const OrderTaskContainer = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>Avatar</div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.infoContainer}>
          <p className={styles.text}>
            Text
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            Button
          </button>
        </div>
      </div>
    </div>
  )
}

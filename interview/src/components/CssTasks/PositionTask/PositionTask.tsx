import React from "react"
import styles from './PositionTask.module.css'

//Необходимо расположить Item строго по центру экрана
export const PositionTask = () => {
  
  return (
    <div className={styles.container}>
      <p className={styles.item}>
        Item
      </p>
    </div>
  )
}

import React from 'react'
import styles from './Modal.module.css'
import closeIcon from '../../assets/icons/ic_x.svg' // Импорт есть

export const Modal = ({ isActive, onClose, children }) => {
  if (!isActive) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          {/* ИСПОЛЬЗУЕМ ИМПОРТ ЗДЕСЬ: */}
          <img src={closeIcon} alt='Close' />
        </button>
        {children}
      </div>
    </div>
  )
}

import styles from '../styles/Button.module.css'

function Button({ children, onClick }) {
	return (
		<button className={styles.btn} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button

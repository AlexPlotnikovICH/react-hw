import styles from './Button.module.css'

export const Button = ({ children, variant = 'blue', size, className, ...props }) => {
  const rootClasses = [
    styles.btn,
    styles[variant],
    size === 'large' ? styles.large : ''
  ].join(' ')

  const finalClass = className ? `${rootClasses} ${className}` : rootClasses

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  )
}
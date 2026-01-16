import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomQuote } from '../features/quote/quoteSlice'

import styles from './Quote.module.css'

const Quote = () => {
  const dispatch = useDispatch()
  const { text, author, status, error } = useSelector(state => state.quote)

  useEffect(() => {
    dispatch(fetchRandomQuote())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <h2>Random Quote Generator</h2>
      {status === 'loading' && <p>Загрузка...</p>}

      {status === 'failed' && <p className={styles.error}>Ошибка: {error}</p>}

      {status === 'succeeded' && (
        <blockquote style={{ fontStyle: 'italic', marginTop: '20px' }}>
          "{text}"<footer className={styles.author}>— {author}</footer>
        </blockquote>
      )}
      <div style={{ marginTop: '30px' }}>
        <button
          className={styles.button}
          onClick={() => dispatch(fetchRandomQuote())}
        >
          New Quote
        </button>
      </div>
    </div>
  )
}

export default Quote

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetQuestionnaire } from '../features/questionnaire/questionnaireSlice'

const Result = () => {
  const dispatch = useDispatch()
  const { score, questions } = useSelector(state => state.questionnaire)

  return (
    <div>
      <h3>Результат</h3>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Вы ответили правильно на <strong>{score}</strong> из{' '}
        <strong>{questions.length}</strong> вопросов.
      </p>

      <button onClick={() => dispatch(resetQuestionnaire())}>
        Пройти заново
      </button>
    </div>
  )
}

export default Result

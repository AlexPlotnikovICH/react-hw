import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { answerQuestion } from '../features/questionnaire/questionnaireSlice'

const Question = ({ question }) => {
  const dispatch = useDispatch()

  const currentAnswer = useSelector(
    state => state.questionnaire.userAnswers[question.id]
  )

  const handleOptionChange = e => {
    dispatch(
      answerQuestion({
        questionId: question.id,
        answer: e.target.value,
      })
    )
  }

  return (
    <div
      style={{
        margin: '20px 0',
        border: '1px solid #ccc',
        padding: '15px',
        borderRadius: '8px',
      }}
    >
      <h3>{question.text}</h3>

      {question.options.map(option => (
        <div key={option}>
          <label>
            <input
              type='radio'
              name={`question-${question.id}`}
              value={option}
              checked={currentAnswer === option} // Если в Redux записан этот ответ - ставим галочку
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Question

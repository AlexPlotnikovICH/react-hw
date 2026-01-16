import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import Question from './components/Question.jsx'
import Result from './components/Result.jsx'
import { submitQuestionnaire } from './features/questionnaire/questionnaireSlice'

function App() {
  const dispatch = useDispatch()
  const { questions, isSubmitted } = useSelector(state => state.questionnaire)

  const handleSubmit = () => {
    dispatch(submitQuestionnaire())
  }

  return (
    <div className='App'>
      <h2>Анкета по React & Redux</h2>

      {isSubmitted ? (
        <Result />
      ) : (
        <div style={{ width: '100%' }}>
          {questions.map(q => (
            <Question key={q.id} question={q} />
          ))}

          <button onClick={handleSubmit}>Отправить ответы</button>
        </div>
      )}
    </div>
  )
}

export default App

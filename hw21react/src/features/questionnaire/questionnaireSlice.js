import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [
    {
      id: 1,
      text: 'React - это библиотека или фреймворк?',
      options: ['Библиотека', 'Фреймворк'],
      correctAnswer: 'Библиотека',
    },
    {
      id: 2,
      text: 'Где хранятся данные в Redux?',
      options: ['В компонентах', 'В Store'],
      correctAnswer: 'В Store',
    },
    {
      id: 3,
      text: 'Как изменить state в Redux?',
      options: ['Напрямую (state.value = 1)', 'Через Dispatch и Action'],
      correctAnswer: 'Через Dispatch и Action',
    },
  ],

  userAnswers: {},
  isSubmitted: false,
  score: 0,
}

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload
      state.userAnswers[questionId] = answer
    },
    submitQuestionnaire: state => {
      state.isSubmitted = true
      state.score = 0
      state.questions.forEach(question => {
        if (state.userAnswers[question.id] === question.correctAnswer) {
          state.score += 1
        }
      })
    },

    resetQuestionnaire: state => {
      state.userAnswers = {}
      state.isSubmitted = false
      state.score = 0
    },
  },
})

export const { answerQuestion, submitQuestionnaire, resetQuestionnaire } =
  questionnaireSlice.actions
export default questionnaireSlice.reducer

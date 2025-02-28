import { createStore } from 'solid-js/store'

export const [store, setStore] = createStore({
  get getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex]
  },
  get percentage() {
    return (this.currentQuestionIndex + 1) / this.questions.length
  },
  get score() {
    return Object.values(this.userAnswers).filter(
      (answerId) =>
        this.questions[this.currentQuestionIndex].answers.find(
          (answer) => answer.id === answerId
        )?.correct
    ).length
  },
  userAnswers: {} as Record<number, number>,
  currentQuestionIndex: 0,
  questions: [
    {
      id: 1,
      label: 'What is the capital of France?',
      note: 'Geography question',
      answers: [
        { id: 1, text: 'Berlin', correct: false },
        { id: 2, text: 'Madrid', correct: false },
        { id: 3, text: 'Paris', correct: true },
        { id: 4, text: 'Rome', correct: false }
      ]
    },
    {
      id: 2,
      label: 'Which programming language is known as the language of the web?',
      answers: [
        { id: 5, text: 'Java', correct: false },
        { id: 6, text: 'Python', correct: false },
        { id: 7, text: 'JavaScript', correct: true },
        { id: 8, text: 'C#', correct: false }
      ]
    },
    {
      id: 3,
      label: 'What is 2 + 2?',
      note: 'Basic math',
      answers: [
        { id: 9, text: '3', correct: false },
        { id: 10, text: '4', correct: true },
        { id: 11, text: '5', correct: false }
      ]
    }
  ]
})

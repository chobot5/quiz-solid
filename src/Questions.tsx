import { Component, Show } from 'solid-js'
import { Question } from './Question'
import { ProgressBar } from './ProgressBar'
import { Button } from './Button'
import { setStore, store } from './store'

export type QuestionType = {
  id: number
  label: string
  note?: string
  answers: AnswersType[]
}
export type AnswersType = {
  id: number
  text: string
  correct: boolean
}

interface QuestionProps {
  onShowResult: () => void
}

export const Questions: Component<QuestionProps> = (props) => {
  // const question = createMemo(() => store()[currentQuestionIndex()])

  return (
    <div class={'w-full text-center questions min-h-dvh relative'}>
      <div class={'pt-4'}>
        <ProgressBar percentage={Math.floor(store.percentage * 100)} />
      </div>
      <Question
        selectedAnswerId={store.userAnswers[store.getCurrentQuestion.id]}
        onSelectAnswer={(answerId) =>
          setStore((st) => ({
            userAnswers: {
              ...st.userAnswers,
              [store.getCurrentQuestion.id]: answerId
            }
          }))
        }
        question={store.getCurrentQuestion}
      />
      <div
        data-id={store.currentQuestionIndex}
        class={'flex items-start justify-center w-full'}
      >
        <Show when={store.currentQuestionIndex === store.questions.length - 1}>
          <Button
            onClick={props.onShowResult}
            label={'Vyhodnotit kvíz'}
            disabled={!Boolean(store.userAnswers[store.getCurrentQuestion.id])}
          />
        </Show>
        <Show
          when={!(store.currentQuestionIndex === store.questions.length - 1)}
        >
          <Button
            onClick={() =>
              setStore((st) => ({
                currentQuestionIndex: st.currentQuestionIndex + 1
              }))
            }
            label={'Další otázka'}
            disabled={!Boolean(store.userAnswers[store.getCurrentQuestion.id])}
          />
        </Show>
      </div>
    </div>
  )
}

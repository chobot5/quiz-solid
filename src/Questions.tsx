import { Component, createMemo, createSignal, For, Show } from 'solid-js'
import { Question } from './Question'
import { createStore } from 'solid-js/store'
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
    <div class={'w-full  relative'}>
      <div class={'w-full text-center questions'}>
        <div>
          <ProgressBar percentage={Math.floor(store.percentage * 100)} />
        </div>
        <Question
          selectedAnswerId={store.userAnswers[store.currentQuestionIndex]}
          onSelectAnswer={(answerId) =>
            setStore((st) => ({
              userAnswers: {
                ...st.userAnswers,
                [st.currentQuestionIndex]: answerId
              }
            }))
          }
          isLastQuestion={
            store.currentQuestionIndex === store.questions.length - 1
          }
          question={store.getCurrentQuestion}
          onNext={() => {
            setStore((st) => ({
              currentQuestionIndex: st.currentQuestionIndex + 1
            }))
          }}
        />
        <div class={'flex items-end justify-center w-full'}>
          <Show
            when={store.currentQuestionIndex === store.questions.length - 1}
          >
            <Button
              onClick={props.onShowResult}
              label={'Vyhodnotit kvíz'}
              disabled={!Boolean(store.userAnswers[store.currentQuestionIndex])}
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
              disabled={!Boolean(store.userAnswers[store.currentQuestionIndex])}
            />
          </Show>
        </div>
      </div>
    </div>
  )
}

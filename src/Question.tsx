import { Component, createMemo, createSignal, For, Show } from 'solid-js'
import { QuestionType } from './Questions'
import { Button } from './Button'
import { Answer } from './Answer'
import img from './assets/question-img.svg'

interface QuestionProps {
  isLastQuestion: boolean
  question: QuestionType
  selectedAnswerId: number
  onSelectAnswer: (id: number) => void
  onNext: () => void
}

export const Question: Component<QuestionProps> = (props) => {
  return (
    <div class={'w-full h-full relative'}>
      <img class={'w-[160px] m-auto my-8'} alt={''} src={img} />
      <h2 class={'mb-8'}>{props.question.label}</h2>
      <div>
        <ul class={'flex flex-col gap-2'}>
          <For each={props.question.answers}>
            {(answer, i) => (
              <Answer
                answer={answer}
                selectAnswer={(id) => props.onSelectAnswer(id)}
                isSelected={answer.id === props.selectedAnswerId}
              />
            )}
          </For>
        </ul>
      </div>
    </div>
  )
}

import { Component, createEffect, createSignal, For, Show } from 'solid-js'
import { QuestionType } from './Questions'
import { Answer } from './Answer'
import img from './assets/question-img.svg'

interface QuestionProps {
  question: QuestionType
  selectedAnswerId: number
  onSelectAnswer: (id: number) => void
}

export const Question: Component<QuestionProps> = (props) => {
  let rootDiv: HTMLDivElement

  createEffect(() => {
    const id = props.question.id
    rootDiv?.setAttribute('class', 'w-full fade-in')
    return setTimeout(() => {
      rootDiv?.setAttribute('class', 'w-full')
    }, 1000)
  }, props.question.id)

  return (
    <div ref={rootDiv} class={'w-full'}>
      <img class={'m-auto w-[120px]'} alt={''} src={img} />
      <h2 class={'py-8'}>{props.question.label}</h2>
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

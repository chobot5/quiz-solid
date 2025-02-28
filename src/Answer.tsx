import { Component, Show } from 'solid-js'
import { AnswersType } from './Questions'
import { cn } from './cn'

interface AnswerProps {
  answer: AnswersType
  selectAnswer: (id: number) => void
  isSelected: boolean
}

export const Answer: Component<AnswerProps> = (props) => {
  return (
    <li>
      <div
        class={cn(
          'flex justify-between text-left bg-blue-100 border border-blue-200 p-2 rounded cursor-pointer hover:bg-blue-200 duration-300',
          props.isSelected &&
            'bg-blue-400 hover:bg-blue-400 text-white border-blue-400'
        )}
        role={'button'}
        onClick={() => props.selectAnswer(props.answer.id)}
      >
        {props.answer.text}
      </div>
    </li>
  )
}

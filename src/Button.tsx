import type { Component } from 'solid-js'
import { cn } from './cn'

interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      class={cn(
        'cursor-pointer bg-[#3664F7] py-2 px-4 text-white rounded min-w-[160px] hover:bg-[#2F5DD9] duration-300',
        props.disabled && 'bg-slate-400 hover:bg-slate-400 cursor-not-allowed'
      )}
      type={'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  )
}

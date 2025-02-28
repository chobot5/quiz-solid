import { Component, createMemo } from 'solid-js'

interface ProgressBarProps {
  percentage: number
}

export const ProgressBar: Component<ProgressBarProps> = (props) => {
  return (
    <div class={'bg-white rounded-md'}>
      <div
        class={'bg-[#76cc8b] rounded-md h-[20px]'}
        style={{ width: `${props.percentage}%` }}
      />
    </div>
  )
}

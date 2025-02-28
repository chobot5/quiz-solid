import { Component, createSignal } from 'solid-js'
import { Button } from './Button'
import { Questions } from './Questions'
import { createStore } from 'solid-js/store'
import { store } from './store'

const App: Component = () => {
  const [quizState, setQuizState] = createSignal<'start' | 'progress' | 'end'>(
    'start'
  )

  return (
    <div class={'w-full h-full p-10 flex justify-center'}>
      {quizState() === 'start' && (
        <div class={'flex flex-col gap-8 size-max mb-8'}>
          <h1 class={'text-center'}>Quizzz</h1>
          <p class={'text-center'}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            sapien sem, ornare ac, nonummy non, lobortis a enim. Proin in tellus
            sit amet nibh dignissim sagittis. Curabitur bibendum justo non orci.
            Praesent dapibus. Etiam commodo dui eget wisi. Neque porro quisquam
            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
          <div class={'m-auto'}>
            <Button
              label={'Začit kvíz'}
              onClick={() => setQuizState('progress')}
            />
          </div>
        </div>
      )}
      {quizState() === 'progress' && (
        <Questions
          onShowResult={() => {
            setQuizState('end')
          }}
        />
      )}
      {quizState() === 'end' && (
        <div>
          <div class={'text-[32px] font-bold text-center mb-12'}>Ho Ho Ho</div>
          <h1 class={'text-ex'}>Tvoje skóre je {store.score}</h1>
        </div>
      )}
    </div>
  )
}

export default App

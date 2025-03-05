import { Component, createSignal } from 'solid-js'
import { Button } from './Button'
import { Questions } from './Questions'
import { store } from './store'

const App: Component = () => {
  const [quizState, setQuizState] = createSignal<'start' | 'progress' | 'end'>(
    'start'
  )

  return (
    <>
      {quizState() === 'start' && (
        <div class={'flex flex-col max-w-full pt-4'}>
          <h1 class={'text-center mb-4'}>Quizzz</h1>
          <p class={'text-center mb-4'}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            sapien sem, ornare ac, nonummy non, lobortis a enim. Proin in tellus
            sit amet nibh dignissim sagittis. Curabitur bibendum justo non orci.
            Praesent dapibus. Etiam commodo dui eget wisi. Neque porro quisquam
            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
          <h2 class={'hacko text-center'}>xxxxxx</h2>
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
        <div class={'pt-4'}>
          <div class={'text-[32px] font-bold text-center mb-12'}>Ho Ho Ho</div>
          <h1 class={'text-ex'}>Tvoje skóre je {store.score}</h1>
        </div>
      )}
    </>
  )
}

export default App

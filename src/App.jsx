import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import SimpleButtons from './components/SimpleButtons'

function App() {
  const [count, setCount] = useState(0)

  const values = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ]

  function ShowButtons({ values }) {
    for(let value of values) {
      // console.log(value)
      return (
        <SimpleButtons key={value} value={value} />
      )
    }
  }

  return (
    <div className="App">
      <Display />
      <div className='grid'>
        <ShowButtons values={values} />
      </div>
    </div>
  )
}

export default App

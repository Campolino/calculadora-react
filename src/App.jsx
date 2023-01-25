import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import SimpleButtons from './components/SimpleButtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Display />
      <div className='grid'>
        <SimpleButtons value={"AC"} />
        <SimpleButtons value={"+/-"} />
        <SimpleButtons value={"%"} />
        <SimpleButtons value={"/"} />
        <SimpleButtons value={"7"} />
        <SimpleButtons value={"8"} />
        <SimpleButtons value={"9"} />
        <SimpleButtons value={"x"} />
        <SimpleButtons value={"4"} />
        <SimpleButtons value={"5"} />
        <SimpleButtons value={"6"} />
        <SimpleButtons value={"-"} />
        <SimpleButtons value={"1"} />
        <SimpleButtons value={"2"} />
        <SimpleButtons value={"3"} />
        <SimpleButtons value={"+"} />
      </div>
      <div className='grid-last-row'>
        <SimpleButtons className='zero' value={"0"} />
        <SimpleButtons value={"."} />
        <SimpleButtons value={"="} />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import Button from './Button'

function App() {
  const [color, setColor] = useState("olive")


  return (
    <>
      <div className=' fixed flex flex-wrap justify-center w-full h-screen bg-green-500'
      style={{backgroundColor: color}} >
        <Button setColor={setColor}></Button>
      </div>
    </>
  )
}

export default App

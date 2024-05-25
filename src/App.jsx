import { useState, useEffect } from 'react'
import Button from './Button'
import DiscoButton from './DiscoButton';

function App() {
  const [color, setColor] = useState("olive")
  const [isDiscoMode, setIsDiscoMode] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isDiscoMode) {
      intervalId = setInterval(() => {
        const colors = ['green', 'red', 'blue', 'yellow'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
      }, 100); // Change color every 0.1 second (100 milliseconds)
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [isDiscoMode]); // Run effect when disco mode state changes

  const toggleDiscoMode = () => {
    setIsDiscoMode((prev) => !prev); // Toggle disco mode state
  };



  return (
    <>
      <div className=' fixed flex flex-wrap justify-center w-full h-screen bg-green-500'
      style={{backgroundColor: color}} >
        <Button setColor={setColor}></Button>
        <DiscoButton  toggleDiscoMode={toggleDiscoMode} isDiscoMode={isDiscoMode}></DiscoButton>
      </div>
    </>
  )
}

export default App

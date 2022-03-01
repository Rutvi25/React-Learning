import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
  const [timer, setTimer] = useState(0)
  const inrevalRef = useRef()

  useEffect(() => {
    inrevalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    return () => {
      clearInterval(inrevalRef.current)
    };
  }, [])
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(inrevalRef.current)}>Clear Hook Timer</button>
    </div>
  )
}

export default HookTimer
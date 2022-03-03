// useLayoutEffect
import React, { useLayoutEffect, useState, useRef } from 'react'

function UseLayoutEffectExample() {
  const [show, setShow] = useState(false)
  const popup = useRef()
  const button = useRef()
  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return
    const { bottom } = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom +  25}px`
  }, [show])
  return (
    <div>
      <h3>Use Layout Effect</h3>
      <button ref={button} onClick={() => setShow(prev => !prev)}>
        Click
      </button>
      {show && (
        <div style={{position: "absolute"}} ref={popup}>
          Hello world!!!
        </div>
      )}
    </div>
  )
}

export default UseLayoutEffectExample
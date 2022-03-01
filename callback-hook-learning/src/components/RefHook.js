import React, {useEffect, useRef} from 'react'

function RefHook() {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, []) 
  return (
    <div>
      <h3>Ref Hook</h3>
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default RefHook